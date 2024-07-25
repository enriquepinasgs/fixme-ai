import { createClient } from "@/lib/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export interface SigninUser {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const user: SigninUser = await request.json();
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword(user);

  if (error) {
    return NextResponse.json({ error: "invalid credentials" }, { status: 401 });
  }
  return NextResponse.json({ status: 204 });
}
