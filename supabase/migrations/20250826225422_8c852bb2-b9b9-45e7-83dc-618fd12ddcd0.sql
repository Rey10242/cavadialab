-- Análisis de seguridad: La tabla 'lead' contiene información sensible de clientes
-- pero puede tener restricciones de lectura pública insuficientes.
-- Vamos a fortalecer las políticas RLS para asegurar máxima protección.

-- Primero, verificar que RLS esté habilitado (debería estarlo ya)
ALTER TABLE public.lead ENABLE ROW LEVEL SECURITY;

-- Crear una política explícita que niegue acceso público de lectura
-- Esta política tendrá prioridad y bloqueará cualquier acceso no autorizado
CREATE POLICY "block_public_lead_access" 
ON public.lead 
FOR SELECT 
TO anon
USING (false);

-- Reforzar la política existente para usuarios autenticados
-- Solo permitir lectura a dueños de negocio y roles autorizados
DROP POLICY IF EXISTS "leads_read_business" ON public.lead;

CREATE POLICY "leads_read_restricted_access" 
ON public.lead 
FOR SELECT 
TO authenticated
USING (
  -- Solo el dueño del negocio puede ver sus leads
  EXISTS (
    SELECT 1 
    FROM business b 
    WHERE b.id = lead.business_id 
    AND b.owner_id = auth.uid()
  )
  OR
  -- O usuarios con roles específicos en el negocio
  has_role_in_business(auth.uid(), lead.business_id, ARRAY['owner'::app_role, 'admin'::app_role])
  OR
  -- O superadministradores de la plataforma
  is_platform_superadmin()
);

-- Crear índice para mejorar rendimiento de las consultas de seguridad
CREATE INDEX IF NOT EXISTS idx_lead_business_security 
ON public.lead (business_id, created_at DESC);