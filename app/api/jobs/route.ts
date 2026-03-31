import { supabase } from "@/src/lib/supabase";

export async function GET() {
  const { data, error } = await supabase.from("jobs").select("*");

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { error } = await supabase.from("jobs").insert([body]);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ message: "ok" });
}