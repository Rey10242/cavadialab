-- URGENTE: Proteger datos sensibles en tabla 'subscribers' (versión corregida)
-- La tabla contiene emails y Stripe customer IDs que pueden ser robados para spam/fraude
-- Implementando máxima seguridad y acceso restringido

-- Asegurar que RLS esté habilitado
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Eliminar todas las políticas existentes para recrearlas con máxima seguridad
DROP POLICY IF EXISTS "public_read_subscribers" ON public.subscribers;
DROP POLICY IF EXISTS "subscribers_read_public" ON public.subscribers;
DROP POLICY IF EXISTS "block_anonymous_subscriber_access" ON public.subscribers;
DROP POLICY IF EXISTS "select_own_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "authenticated_users_insert_own_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "users_update_own_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "service_role_manage_subscriptions" ON public.subscribers;

-- 1. Política que bloquea completamente acceso anónimo
CREATE POLICY "block_all_anonymous_access" 
ON public.subscribers 
FOR ALL
TO anon
USING (false)
WITH CHECK (false);

-- 2. Política restrictiva para lectura: solo datos propios del usuario
CREATE POLICY "read_own_subscription_only" 
ON public.subscribers 
FOR SELECT 
TO authenticated
USING (
  -- Doble verificación: user_id Y email deben coincidir
  (user_id = auth.uid() AND email = auth.email())
);

-- 3. Política para inserción: solo datos propios
CREATE POLICY "insert_own_subscription_only" 
ON public.subscribers 
FOR INSERT 
TO authenticated
WITH CHECK (
  -- Solo puede insertar con su propio user_id y email
  (user_id = auth.uid() AND email = auth.email())
);

-- 4. Política para actualización: solo datos propios
CREATE POLICY "update_own_subscription_only" 
ON public.subscribers 
FOR UPDATE 
TO authenticated
USING (
  (user_id = auth.uid() AND email = auth.email())
)
WITH CHECK (
  (user_id = auth.uid() AND email = auth.email())
);

-- 5. Acceso completo para service role (necesario para Edge Functions de Stripe)
CREATE POLICY "service_role_complete_access" 
ON public.subscribers 
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Crear índice para optimizar consultas de seguridad
CREATE INDEX IF NOT EXISTS idx_subscribers_security_lookup 
ON public.subscribers (user_id, email);

-- Restricción para prevenir registros huérfanos
ALTER TABLE public.subscribers 
DROP CONSTRAINT IF EXISTS subscribers_user_id_required;

ALTER TABLE public.subscribers 
ADD CONSTRAINT subscribers_user_id_required 
CHECK (user_id IS NOT NULL);

-- Documentar la seguridad implementada
COMMENT ON TABLE public.subscribers IS 'TABLA PROTEGIDA: Datos de suscriptores con máxima seguridad RLS. Acceso solo a datos propios.';
COMMENT ON POLICY "read_own_subscription_only" ON public.subscribers IS 'SEGURIDAD: Previene robo de emails - solo lectura de datos propios';
COMMENT ON POLICY "block_all_anonymous_access" ON public.subscribers IS 'SEGURIDAD: Bloqueo total a anónimos para prevenir scraping de emails';