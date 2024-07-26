import { createClient } from "@/lib/supabase/server";

import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const { data: authData, error } = await supabase.auth.getUser();

  if (error || !authData.user) {
    return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
  }
  try {
    const text = await supabase
      .from("Text")
      .select("*")
      .filter("id", "eq", params.id)
      .filter("createdBy", "eq", authData.user.id)
      .limit(1)
      .single();
    return NextResponse.json(text);
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
