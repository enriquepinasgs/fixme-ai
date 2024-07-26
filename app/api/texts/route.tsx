import { createClient } from "@/lib/supabase/server";

import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const supabase = createClient();
  const { data: authData, error } = await supabase.auth.getUser();

  if (error || !authData.user) {
    return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
  }
  try {
    const textIds = await supabase
      .from("Text")
      .select("id, createdAt, title")
      .order("createdAt", { ascending: false });
    return NextResponse.json(textIds);
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
