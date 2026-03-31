import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rshalwpuieaivqcibypa.supabase.co";
const supabaseKey = "あなたのanonキー";

export const supabase = createClient(supabaseUrl, supabaseKey);