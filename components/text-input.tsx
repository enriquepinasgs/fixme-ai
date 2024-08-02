"use client";
import { cn } from "@/lib/utils";
import { useSuggestionStore } from "@/store/suggestion-store";
import LengthCount from "./length-count";
import { Textarea } from "./ui/textarea";

export default function TextInput({ classname }: { classname?: string }) {
  const { setOriginalText, isLoading } = useSuggestionStore((state) => ({
    setOriginalText: state.setOriginalText,
    isLoading: state.isLoading,
  }));
  return (
    <div className={cn("flex flex-col w-full gap-1.5", classname)}>
      <div className="relative">
        <LengthCount classname="absolute bottom-0 left-0 m-2 text-foreground/50" />
        <Textarea
          disabled={isLoading}
          onChange={(value) => setOriginalText(value.target.value)}
          placeholder="Type or paste your text here to get suggestions."
          className="h-96 max-h-96 shadow-md text-md resize-none"
          id="input-text"
          maxLength={3000}
        />
      </div>
      <p className="text-sm text-muted-foreground">
        The AI will analyze your text and suggest improvements.
      </p>
    </div>
  );
}
