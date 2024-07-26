import { createClient } from "@/lib/supabase/server";

import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = createClient();
  const { data: authData, error } = await supabase.auth.getUser();

  if (error || !authData.user) {
    return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
  }
  try {
    const user = await supabase
      .from("User")
      .select("*")
      .filter("id", "eq", authData.user.id)
      .limit(1)
      .single();
    return NextResponse.json(user);
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
