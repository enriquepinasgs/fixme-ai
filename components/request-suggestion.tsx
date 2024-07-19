"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Mode, modes } from "@/lib/modes";
import { getPromptForMode } from "@/lib/prompts";
import { cn } from "@/lib/utils";
import { useApiKeyStore } from "@/store/apikey-store";
import { useSuggestionStore } from "@/store/suggestion-store";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { CircleHelpIcon, SparklesIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { SelectMode } from "./select-mode";
import { Button } from "./ui/button";

export default function RequestSuggestion({
  classname,
}: {
  classname?: string;
}) {
  const [selectedMode, setSelectedMode] = useState<Mode | undefined>(undefined);
  const changeMode = useCallback(setSelectedMode, [setSelectedMode]);
  const { originalText, setSuggestedText, setSentText } = useSuggestionStore(
    (state) => ({
      originalText: state.originalText,
      setSuggestedText: state.setSuggestedText,
      setSentText: state.setSentText,
    })
  );
  const { openApiKeyModal, currentApiKey } = useApiKeyStore((state) => ({
    openApiKeyModal: state.setModalIsOpen,
    currentApiKey: state.apiKey,
  }));

  async function submit() {
    if (selectedMode === undefined || originalText === undefined) return;
    if (currentApiKey === undefined) {
      openApiKeyModal(true);
      return;
    }
    const generatedPrompt = getPromptForMode(selectedMode.name, originalText);
    const openai = createOpenAI({ apiKey: currentApiKey });
    const suggestedText = await generateText({
      model: openai("gpt-4-turbo"),
      prompt: generatedPrompt,
    });
    setSuggestedText(suggestedText.text);
    setSentText(originalText);
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
          originalText === undefined || originalText.trim().length === 0
        }
      >
        <span>Submit</span> <SparklesIcon className="w-4 h-4"></SparklesIcon>
      </Button>
    </div>
  );
}
