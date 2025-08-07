import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dyqolrmwgsbcajnvgszi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5cW9scm13Z3NiY2FqbnZnc3ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NzI4OTYsImV4cCI6MjA3MDE0ODg5Nn0.Xgf7QhCA30XYituPBILg0Lf7SUrG3bBZf-eTjdlnp9M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
