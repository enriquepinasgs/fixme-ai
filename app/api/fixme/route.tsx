import { Mode } from "@/lib/modes";
import { getPromptForMode } from "@/lib/prompts";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextResponse, type NextRequest } from "next/server";

export interface FixMeInput {
  text: string;
  mode: Mode;
}

export async function POST(request: NextRequest) {
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
    return NextResponse.json({ suggestedText: text }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
