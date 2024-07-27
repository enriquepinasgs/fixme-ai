"use client";
import { cn } from "@/lib/utils";
import { useSuggestionStore } from "@/store/suggestion-store";
import LengthCount from "./length-count";
import RequestSuggestion from "./request-suggestion";
import { Textarea } from "./ui/textarea";

export default function TextInput({ classname }: { classname?: string }) {
  const { setOriginalText, originalText, isLoading } = useSuggestionStore(
    (state) => ({
      setOriginalText: state.setOriginalText,
      originalText: state.originalText,
      isLoading: state.isLoading,
    })
  );
  return (
    <div
      className={cn(
        "flex flex-col w-full gap-2 relative h-full p-1",
        classname
      )}
    >
      <LengthCount classname="absolute bottom-0 left-0 mb-20 ml-2 text-foreground/50" />
      <Textarea
        disabled={isLoading}
        value={originalText}
        onChange={(value) => setOriginalText(value.target.value)}
        placeholder="Type or paste your text here to get suggestions."
        className="h-full text-md border-none rounded-[2px] resize-none text-pretty "
        id="input-text"
      />
      <RequestSuggestion classname="justify-between h-16 " />
    </div>
  );
}
