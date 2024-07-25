import { createClient } from "@/lib/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export interface SignupUser {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const user: SignupUser = await request.json();
  const supabase = createClient();

  const { error, data } = await supabase.auth.signUp(user);

  console.log(error);

  if (error) {
    return NextResponse.json({ error: "cannot signup user" }, { status: 500 });
  }

  return NextResponse.json(data.user, { status: 201 });
}
