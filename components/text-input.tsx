"use client";
import { cn } from "@/lib/utils";
import { useApiKeyStore } from "@/store/apikey-store";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { Textarea } from "./ui/textarea";

export default function TextInput({ classname }: { classname?: string }) {
  const currentApiKey = useApiKeyStore((state) => state.apiKey);
  const openai = createOpenAI({ apiKey: currentApiKey });

  async function generateFix(input: string) {
    const { text } = await generateText({
      model: openai("gpt-4-turbo"),
      prompt: "Write something with 2 lines.",
    });
    console.log(text);
  }
  return (
    <div className={cn("flex flex-col w-full gap-1.5", classname)}>
      <Textarea
        placeholder="Type or paste your text here to get suggestions."
        className="h-96 max-h-96 shadow-md"
        id="input-text"
      />
      <p className="text-sm text-muted-foreground">
        The AI will analyze your text and suggest improvements.
      </p>
    </div>
  );
}
