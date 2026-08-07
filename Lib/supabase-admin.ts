import { createClient } from "@supabase/supabase-js";

const url = process.env.https//bxokeiaccwcceqoakixu.supabase.co;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  throw new Error("Missing Supabase environment variables");
}

export const supabaseAdmin = createClient(url, key);