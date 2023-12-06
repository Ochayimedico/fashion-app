import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.FASHION_APP_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
