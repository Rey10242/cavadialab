-- Fix lead table security: Restrict INSERT to require business validation
-- Currently anyone can insert leads, but we should validate business exists and is active

-- Drop the existing insert policy that's too permissive
DROP POLICY IF EXISTS "leads_insert_validated" ON public.lead;

-- Create a more secure insert policy that still allows public lead submission
-- but adds proper validation and prevents abuse
CREATE POLICY "leads_insert_public_validated" 
ON public.lead 
FOR INSERT 
WITH CHECK (
  -- Ensure the business exists and is active
  EXISTS (
    SELECT 1 
    FROM business 
    WHERE business.id = business_id 
    AND business.status = 'active'
  )
  -- Add basic validation for required fields
  AND full_name IS NOT NULL 
  AND length(trim(full_name)) >= 2
  AND phone IS NOT NULL 
  AND length(trim(phone)) >= 8
);