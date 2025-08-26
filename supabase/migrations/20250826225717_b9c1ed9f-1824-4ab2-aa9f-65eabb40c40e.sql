-- URGENTE: Proteger datos sensibles en tabla 'subscribers'
-- La tabla contiene emails y Stripe customer IDs que pueden ser robados para spam/fraude
-- Implementando máxima seguridad y acceso restringido

-- Asegurar que RLS esté habilitado
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Eliminar cualquier política que permita acceso público anónimo
DROP POLICY IF EXISTS "public_read_subscribers" ON public.subscribers;
DROP POLICY IF EXISTS "subscribers_read_public" ON public.subscribers;

-- Crear política explícita que bloquee todo acceso anónimo
CREATE POLICY "block_anonymous_subscriber_access" 
ON public.subscribers 
FOR ALL
TO anon
USING (false)
WITH CHECK (false);

-- Política restrictiva para lectura: solo el usuario puede ver sus propios datos
DROP POLICY IF EXISTS "select_own_subscription" ON public.subscribers;
CREATE POLICY "subscribers_read_own_data_only" 
ON public.subscribers 
FOR SELECT 
TO authenticated
USING (
  -- Solo puede ver sus propios datos basado en user_id Y email
  (user_id = auth.uid() AND email = auth.email())
);

-- Política para inserción: solo usuarios autenticados y solo sus propios datos
DROP POLICY IF EXISTS "authenticated_users_insert_own_subscription" ON public.subscribers;
CREATE POLICY "subscribers_insert_own_data_only" 
ON public.subscribers 
FOR INSERT 
TO authenticated
WITH CHECK (
  -- Solo puede insertar con su propio user_id y email
  (user_id = auth.uid() AND email = auth.email())
);

-- Política para actualización: solo usuarios autenticados y solo sus propios datos
DROP POLICY IF EXISTS "users_update_own_subscription" ON public.subscribers;
CREATE POLICY "subscribers_update_own_data_only" 
ON public.subscribers 
FOR UPDATE 
TO authenticated
USING (
  -- Solo puede actualizar sus propios datos
  (user_id = auth.uid() AND email = auth.email())
)
WITH CHECK (
  -- Y solo puede cambiar a datos que sigan siendo suyos
  (user_id = auth.uid() AND email = auth.email())
);

-- Mantener acceso completo para funciones edge (service role)
-- Esto es necesario para las funciones de Stripe
DROP POLICY IF EXISTS "service_role_manage_subscriptions" ON public.subscribers;
CREATE POLICY "service_role_full_access" 
ON public.subscribers 
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Crear índices para mejorar rendimiento de consultas de seguridad
CREATE INDEX IF NOT EXISTS idx_subscribers_user_security 
ON public.subscribers (user_id, email);

-- Agregar restricción para asegurar que user_id no sea nulo en datos sensibles
-- Esto previene crear registros sin dueño
ALTER TABLE public.subscribers 
ADD CONSTRAINT subscribers_user_id_required 
CHECK (user_id IS NOT NULL);

-- Comentario de seguridad
COMMENT ON TABLE public.subscribers IS 'Tabla de suscriptores con máxima seguridad RLS. Solo acceso a datos propios del usuario autenticado.';
COMMENT ON POLICY "subscribers_read_own_data_only" ON public.subscribers IS 'Previene robo de emails - solo acceso a datos propios';
COMMENT ON POLICY "block_anonymous_subscriber_access" ON public.subscribers IS 'Bloqueo completo a usuarios anónimos para prevenir data scraping';