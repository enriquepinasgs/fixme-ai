"use client";
import { cn } from "@/lib/utils";
import { useSuggestionStore } from "@/store/suggestion-store";
import { Textarea } from "./ui/textarea";

export default function TextInput({ classname }: { classname?: string }) {
  const setOriginalText = useSuggestionStore((state) => state.setOriginalText);
  return (
    <div className={cn("flex flex-col w-full gap-1.5", classname)}>
      <Textarea
        onChange={(value) => setOriginalText(value.target.value)}
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
