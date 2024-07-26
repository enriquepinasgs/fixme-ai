"use client";
import Diff from "@/components/diff";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { defaultOriginalText, defaultSuggestedText } from "@/lib/modes";
import { cn } from "@/lib/utils";
import { useSuggestionStore } from "@/store/suggestion-store";
import { CheckIcon, ClipboardIcon, Loader2 } from "lucide-react";
import { Fragment, useState } from "react";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function FixedTextViewer({ classname }: { classname?: string }) {
  const [showErrors, setShowErrors] = useState(true);
  const [diffMode, setDiffMode] = useState<string>("words");
  const { sentText, suggestedText, isLoading } = useSuggestionStore(
    (state) => ({
      sentText: state.sentText,
      suggestedText: state.suggestedText,
      isLoading: state.isLoading,
    })
  );

  const { isCopied, copyToClipboard } = useCopyToClipboard();
  return (
    <div className={cn("flex flex-col gap-2 h-full w-full ", classname)}>
      <button
        onClick={() => {
          copyToClipboard(suggestedText ?? defaultSuggestedText);
          toast.success("text copied to clipboard");
        }}
        className={cn(
          "overflow-auto group relative text-start h-full w-full flex bg-background",
          showErrors && !isLoading ? "hover:text-foreground/50" : "",
          isLoading ? "overflow-hidden" : ""
        )}
      >
        {isLoading && (
          <Fragment>
            <Loader2 className="animate-spin absolute top-1/2 right-1/2 text-primary z-20" />
            <div className="flex h-full w-full z-10 absolute bg-gray-200/50 dark:bg-gray-800/50"></div>
          </Fragment>
        )}

        {isCopied ? (
          <CheckIcon className=" bg-background absolute top-0 w-4 h-4 right-0 m-4 group-hover:opacity-100 opacity-0 text-foreground" />
        ) : (
          <ClipboardIcon className="bg-background absolute top-0 w-4 h-4 right-0 m-4 group-hover:opacity-100 opacity-0 text-foreground" />
        )}
        <Diff
          string1={sentText && suggestedText ? sentText : defaultOriginalText}
          string2={
            sentText && suggestedText ? suggestedText : defaultSuggestedText
          }
          showErrors={showErrors}
          mode={diffMode}
          classname="px-6 py-2 text-pretty whitespace-pre-line"
        />
      </button>
      <div className="flex items-center justify-between h-16 ">
        <div className="flex items-center space-x-2">
          <Switch
            checked={showErrors}
            id="show-changes"
            onClick={() => setShowErrors(!showErrors)}
          />
          <Label htmlFor="show-changes">Show changes</Label>
        </div>
        <Tabs value={diffMode} onValueChange={setDiffMode} defaultValue="words">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger disabled={!showErrors} value="words">
              Words
            </TabsTrigger>
            <TabsTrigger disabled={!showErrors} value="chars">
              Chars
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
