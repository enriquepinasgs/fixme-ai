import { createClient } from "@/lib/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return NextResponse.json({ error: "unauthorized" }, { status: 403 });
  }
  return NextResponse.json({ status: 200 });
}
