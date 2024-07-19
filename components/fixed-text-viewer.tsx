"use client";
import Diff from "@/components/diff";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { defaultOriginalText, defaultSuggestedText } from "@/lib/modes";
import { cn } from "@/lib/utils";
import { useSuggestionStore } from "@/store/suggestion-store";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function FixedTextViewer({ classname }: { classname?: string }) {
  const [showErrors, setShowErrors] = useState(true);
  const [diffMode, setDiffMode] = useState<string>("words");
  const { sentText, suggestedText } = useSuggestionStore((state) => ({
    sentText: state.sentText,
    suggestedText: state.suggestedText,
  }));

  const { isCopied, copyToClipboard } = useCopyToClipboard();
  return (
    <div className={cn("flex flex-col space-y-4 h-full w-full", classname)}>
      <button
        onClick={() => {
          copyToClipboard(suggestedText ?? defaultSuggestedText);
          toast.success("text copied to clipboard");
        }}
        className={cn(
          "border rounded-md shadow-md px-6 py-4 overflow-auto max-h-96 group relative text-start h-full w-full flex bg-background"
        )}
      >
        {isCopied ? (
          <CheckIcon className=" bg-background absolute top-0 w-4 h-4 right-0 m-4 group-hover:opacity-100 opacity-0" />
        ) : (
          <ClipboardIcon className="bg-background absolute top-0 w-4 h-4 right-0 m-4 group-hover:opacity-100 opacity-0" />
        )}
        <Diff
          string1={sentText && suggestedText ? sentText : defaultOriginalText}
          string2={
            sentText && suggestedText ? suggestedText : defaultSuggestedText
          }
          showErrors={showErrors}
          mode={diffMode}
        />
      </button>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch
            checked={showErrors}
            id="show-changes"
            onClick={() => setShowErrors(!showErrors)}
          />
          <Label htmlFor="show-changes">Show changes</Label>
        </div>
        <Tabs
          value={diffMode}
          onValueChange={setDiffMode}
          defaultValue="words"
          onChange={() => {
            console.log("hola");
          }}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="words">Words</TabsTrigger>
            <TabsTrigger value="chars">Chars</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
