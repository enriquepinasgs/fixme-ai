"use client";
import Diff from "@/components/diff";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
export default function SuggestedText({
  originalText,
  suggestedText,
}: {
  originalText: string;
  suggestedText: string;
}) {
  const [showErrors, setShowErrors] = useState(true);
  const [diffMode, setDiffMode] = useState<string>("words");
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="flex flex-col gap-2 h-full w-full justify-between">
      <button
        onClick={() => {
          copyToClipboard(suggestedText ?? "");
          toast.success("text copied to clipboard");
        }}
        className={cn(
          "overflow-auto group relative text-start h-full w-full flex bg-background",
          showErrors ? "hover:text-foreground/50" : ""
        )}
      >
        {isCopied ? (
          <CheckIcon className=" bg-background absolute top-0 w-4 h-4 right-0 m-4 group-hover:opacity-100 opacity-0 text-foreground" />
        ) : (
          <ClipboardIcon className="bg-background absolute top-0 w-4 h-4 right-0 m-4 group-hover:opacity-100 opacity-0 text-foreground" />
        )}
        <Diff
          string1={originalText}
          string2={suggestedText}
          showErrors={showErrors}
          mode={diffMode}
          classname="py-3 px-4 text-pretty whitespace-pre-line"
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
