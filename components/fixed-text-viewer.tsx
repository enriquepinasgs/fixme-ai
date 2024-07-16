"use client";
import Diff from "@/components/diff";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function FixedTextViewer({ classname }: { classname?: string }) {
  const [showErrors, setShowErrors] = useState(true);
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  return (
    <div className={cn("flex flex-col space-y-4 h-full w-full", classname)}>
      <button
        onClick={() => {
          copyToClipboard("testing");
          toast.success("text copied to clipboard");
        }}
        className={cn(
          "border rounded-md shadow-md px-6 py-4 overflow-auto max-h-96 group relative text-start h-full w-full flex bg-background"
        )}
      >
        {isCopied ? (
          <CheckIcon className=" bg-background absolute top-0 w-4 h-4 right-0 m-4 group-hover:opacity-100" />
        ) : (
          <ClipboardIcon className="bg-background absolute top-0 w-4 h-4 right-0 m-4 group-hover:opacity-100" />
        )}
        <Diff
          string1="Welcome to FixMe.ai! This is a very usefull tool that will help you to improve your writings. To use it, simply write or paste your text in the box on the left and choose one of the options from the toolbar below. The 'FixMe' option will sugest corrections and improvements in your text. The 'Funny' option will change the tone of your text to make it more funny. And the 'Angry' option will change the tone to make it more angry. Try different options to see how your text changes!"
          string2="Welcome to FixMe.ai! This is a very useful tool that will help you improve your writing. To use it, simply write or paste your text in the box on the left and choose one of the options from the toolbar below. The 'FixMe' option will suggest corrections and improvements to your text. The 'Funny' option will change the tone of your text to make it funnier. And the 'Angry' option will change the tone to make it angrier. Try different options to see how your text changes!"
          showErrors={showErrors}
        />
      </button>
      <div className="flex items-center space-x-2">
        <Switch
          checked={showErrors}
          id="airplane-mode"
          onClick={() => setShowErrors(!showErrors)}
        />
        <Label htmlFor="airplane-mode">Show suggestions</Label>
      </div>
    </div>
  );
}
