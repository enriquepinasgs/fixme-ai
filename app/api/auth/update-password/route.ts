import { NextResponse, type NextRequest } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export interface UpdatePassword {
  newPassword: string;
  code: string;
}
export async function POST(request: NextRequest) {
  const { newPassword, code }: UpdatePassword = await request.json();

  if (!newPassword || !code) redirect("/error");

  const supabase = createClient();
  const { error: codeError } = await supabase.auth.exchangeCodeForSession(code);
  if (codeError) return NextResponse.json({ status: 500 });
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  if (error || !data.user) return NextResponse.json({ status: 500 });
  redirect("/app");
}
