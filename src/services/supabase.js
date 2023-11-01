import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ctrpspukmwemacwwvadj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0cnBzcHVrbXdlbWFjd3d2YWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwODY0ODYsImV4cCI6MjAxMzY2MjQ4Nn0.eyY1JdGv2oL8N5_b90z1oBJ7Clx8vVHHRKkLgBMtui0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
