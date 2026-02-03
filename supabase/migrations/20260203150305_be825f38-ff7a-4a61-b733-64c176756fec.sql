-- Add phone and location columns to contact_submissions table
ALTER TABLE public.contact_submissions 
ADD COLUMN phone TEXT,
ADD COLUMN location TEXT;