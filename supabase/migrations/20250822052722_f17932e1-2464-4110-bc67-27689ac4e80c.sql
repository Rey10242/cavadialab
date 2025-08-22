-- Fix subscribers table security vulnerabilities
-- Current INSERT and UPDATE policies are too permissive

-- Drop the overly permissive policies
DROP POLICY IF EXISTS "insert_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "update_own_subscription" ON public.subscribers;

-- Create secure INSERT policy that only allows authenticated users to insert their own data
CREATE POLICY "authenticated_users_insert_own_subscription" 
ON public.subscribers 
FOR INSERT 
TO authenticated
WITH CHECK (
  auth.uid() = user_id 
  AND auth.email() = email
);

-- Create secure UPDATE policy that only allows users to update their own subscription data
CREATE POLICY "users_update_own_subscription" 
ON public.subscribers 
FOR UPDATE 
TO authenticated
USING (
  auth.uid() = user_id 
  OR auth.email() = email
)
WITH CHECK (
  auth.uid() = user_id 
  AND auth.email() = email
);

-- Create a policy for service role (edge functions) to manage subscriptions
-- This allows edge functions using service role key to bypass RLS for legitimate operations
CREATE POLICY "service_role_manage_subscriptions" 
ON public.subscribers 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);