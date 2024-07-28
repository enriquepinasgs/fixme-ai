"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFixText } from "@/hooks/api-hook";
import { Mode, modes } from "@/lib/modes";
import { cn } from "@/lib/utils";
import { useSuggestionStore } from "@/store/suggestion-store";
import { useQueryClient } from "@tanstack/react-query";
import { CircleHelpIcon, SparklesIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { SelectMode } from "./select-mode";
import { Button } from "./ui/button";

export default function RequestSuggestion({
  classname,
}: {
  classname?: string;
}) {
  const [selectedMode, setSelectedMode] = useState<Mode | undefined>(undefined);
  const changeMode = useCallback(setSelectedMode, [setSelectedMode]);
  const {
    originalText,
    setSuggestedText,
    setSentText,
    isLoading,
    setIsLoading,
  } = useSuggestionStore((state) => ({
    originalText: state.originalText,
    setSuggestedText: state.setSuggestedText,
    setSentText: state.setSentText,
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading,
  }));

  const { mutate } = useFixText();
  const queryClient = useQueryClient();
  async function submit() {
    if (selectedMode === undefined || originalText === undefined) return;
    setIsLoading(true);
    mutate(
      { mode: selectedMode, text: originalText },
      {
        onSuccess: (res) => {
          if ("suggestedText" in res.data) {
            setSentText(originalText);
            setSuggestedText(res.data.suggestedText);
            toast.success("Text generated successfully");
            queryClient.invalidateQueries({ queryKey: ["textsHistory"] });
            queryClient.invalidateQueries({ queryKey: ["me"] });
          } else toast.error("Oops, something went wrong :(");
        },
        onError: (error) => {
          if (error.message.includes("422"))
            toast.error("Insufficient balance");
          else toast.error("Oops, something went wrong :(");
        },
        onSettled: () => {
          setIsLoading(false);
        },
      }
    );
  }
  return (
    <div className={cn("flex items-center gap-2", classname)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <CircleHelpIcon className="w-5 h-5 " />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full max-w-sm md:max-w-md lg:max-w-lg">
          <div className="px-4">
            <ul className="list-disc">
              {modes.map((mode) => (
                <li key={mode.name}>
                  <p>
                    <strong>{mode.name}</strong>: {mode.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </PopoverContent>
      </Popover>
      <SelectMode onChange={changeMode} />
      <Button
        onClick={submit}
        className="gap-2"
        disabled={
          originalText === undefined ||
          originalText.trim().length === 0 ||
          isLoading
        }
      >
        <span>Submit</span> <SparklesIcon className="w-4 h-4"></SparklesIcon>
      </Button>
    </div>
  );
}
