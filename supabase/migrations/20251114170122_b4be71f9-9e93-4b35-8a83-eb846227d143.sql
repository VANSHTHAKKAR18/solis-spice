-- Create enquiries table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  product TEXT NOT NULL,
  quantity TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert enquiries (public form)
CREATE POLICY "Anyone can submit enquiries"
ON public.enquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow reading all enquiries (for admin purposes later)
CREATE POLICY "Anyone can view enquiries"
ON public.enquiries
FOR SELECT
TO anon
USING (true);

-- Create index for faster queries
CREATE INDEX idx_enquiries_created_at ON public.enquiries(created_at DESC);