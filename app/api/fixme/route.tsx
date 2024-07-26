import { Mode } from "@/lib/modes";
import { getPromptForMode } from "@/lib/prompts";
import { Database } from "@/lib/supabase";
import { createClient } from "@/lib/supabase/server";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { v4 as uuid } from "uuid";

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
    const { text } = await generateText({
      model: openai("gpt-4-turbo"),
      prompt: generatedPrompt,
    });
    const newTextRow: Database["public"]["Tables"]["Text"]["Insert"] = {
      createdBy: authData.user.id,
      original: data.text,
      suggested: text,
      title: data.text.slice(0, 50),
      id: uuid(),
    };
    await supabase.from("Text").insert(newTextRow);
    return NextResponse.json({ suggestedText: text }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
