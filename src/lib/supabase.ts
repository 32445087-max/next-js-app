import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rshalwpuieaivqcibypa.supabase.co";
const supabaseKey = "sb_publishable_95Ck5XegqYHEi6QyzH_JKg_8Riqn8kt";

export const supabase = createClient(supabaseUrl, supabaseKey);