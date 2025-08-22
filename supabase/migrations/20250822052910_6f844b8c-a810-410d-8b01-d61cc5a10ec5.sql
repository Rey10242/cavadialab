-- Enhance lead table security while maintaining lead generation functionality
-- The current policy allows public INSERT which is necessary for lead forms,
-- but we can add better validation and abuse prevention

-- Drop the existing insert policy to replace with enhanced version
DROP POLICY IF EXISTS "leads_insert_public_validated" ON public.lead;

-- Create enhanced insert policy with stronger validation
CREATE POLICY "leads_insert_validated_enhanced" 
ON public.lead 
FOR INSERT 
WITH CHECK (
  -- Ensure the business exists and is active (prevents invalid business_id spam)
  EXISTS (
    SELECT 1 
    FROM business 
    WHERE business.id = business_id 
    AND business.status = 'active'
  )
  -- Enhanced validation for required fields to prevent garbage data
  AND full_name IS NOT NULL 
  AND length(trim(full_name)) >= 2
  AND length(trim(full_name)) <= 100  -- Prevent excessively long names
  AND full_name ~ '^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-\.'']+$'  -- Only allow letters, spaces, hyphens, dots, apostrophes
  AND phone IS NOT NULL 
  AND length(trim(phone)) >= 8
  AND length(trim(phone)) <= 20  -- Prevent excessively long phone numbers
  AND phone ~ '^[\+]?[0-9\s\-\(\)\.]+$'  -- Only allow numbers and common phone formatting characters
  -- Optional city validation if provided
  AND (city IS NULL OR (length(trim(city)) >= 2 AND length(trim(city)) <= 50))
  -- Prevent obvious spam patterns
  AND NOT (full_name ILIKE '%test%' AND phone LIKE '%123%')
  AND NOT (full_name ILIKE '%spam%')
  AND NOT (full_name ILIKE '%fake%')
);

-- Add a trigger function to detect and prevent rapid submission abuse
CREATE OR REPLACE FUNCTION public.check_lead_submission_rate()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if there are more than 3 submissions from the same phone in the last hour
  IF (
    SELECT COUNT(*) 
    FROM public.lead 
    WHERE phone = NEW.phone 
    AND created_at > NOW() - INTERVAL '1 hour'
  ) >= 3 THEN
    RAISE EXCEPTION 'Too many submissions from this phone number. Please wait before submitting again.';
  END IF;
  
  -- Check if there are more than 5 submissions with the same name in the last hour
  IF (
    SELECT COUNT(*) 
    FROM public.lead 
    WHERE full_name = NEW.full_name 
    AND created_at > NOW() - INTERVAL '1 hour'
  ) >= 5 THEN
    RAISE EXCEPTION 'Too many submissions with this name. Please wait before submitting again.';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger to enforce rate limiting
CREATE TRIGGER lead_submission_rate_check
  BEFORE INSERT ON public.lead
  FOR EACH ROW
  EXECUTE FUNCTION public.check_lead_submission_rate();