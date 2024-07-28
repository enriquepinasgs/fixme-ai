import { Mode } from "@/lib/modes";
import { getPromptForMode } from "@/lib/prompts";
import { Database, UserRow } from "@/lib/supabase.types";
import { createClient } from "@/lib/supabase/server";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { v4 as uuid } from "uuid";

import { CREDITS_PER_WORD } from "@/config/credits";
import { NextResponse, type NextRequest } from "next/server";

export interface FixMeInput {
  text: string;
  mode: Mode;
}

export async function POST(request: NextRequest) {
  const supabase = createClient();
  const { data: authData, error } = await supabase.auth.getUser();

  if (error || !authData.user) {
    return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
  }

  const data: FixMeInput = await request.json();
  const generatedPrompt = getPromptForMode(data.mode.name, data.text);
  const openai = createOpenAI({
    apiKey: process.env.OPENAI_APIKEY,
  });
  try {
    const wordCount = data.text.trim().split(" ").length;
    const creditsCost = wordCount * CREDITS_PER_WORD;

    const user = await supabase
      .from("User")
      .select("*")
      .filter("id", "eq", authData.user.id)
      .limit(1)
      .single();

    if (user.error)
      return NextResponse.json({ error: "server error" }, { status: 500 });
    const userData = user.data as UserRow;
    if (userData.credits < creditsCost) {
      return NextResponse.json(
        { error: "insufficient credits" },
        { status: 422 }
      );
    }

    const { text } = await generateText({
      model: openai("gpt-4-turbo"),
      prompt: generatedPrompt,
    });
    const newTextRow: Database["public"]["Tables"]["Text"]["Insert"] = {
      createdBy: authData.user.id,
      original: data.text,
      suggested: text,
      title: data.text.slice(0, 50),
      deleted: false,
      id: uuid(),
    };
    await supabase.from("Text").insert(newTextRow);
    const remainingCredits =
      Math.round((userData.credits - creditsCost + Number.EPSILON) * 100) / 100;
    await supabase
      .from("User")
      .update({ credits: remainingCredits })
      .eq("id", authData.user.id);
    return NextResponse.json({ suggestedText: text }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
