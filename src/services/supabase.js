import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ioyaoryfwxzeltvdlfep.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlveWFvcnlmd3h6ZWx0dmRsZmVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3NDUzODMsImV4cCI6MjAyODMyMTM4M30.WQh63FoR6wNlSDCJiqDz4aQVeBIpcl6F7Wpt2Xn71Bo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
