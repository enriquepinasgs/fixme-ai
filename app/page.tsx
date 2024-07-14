import FixedTextViewer from "@/components/fixed-text-viewer";
import Tittle from "@/components/title";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SparklesIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="relative">
      <Tittle classname="mt-24" />
      <div className="grid grid-cols-2 h-full w-full">
        <div className="p-12 items-center justify-center flex h-full">
          <div className="flex flex-col w-full gap-1.5 max-w-md">
            <Label htmlFor="input-text">Your Text</Label>
            <Textarea
              placeholder="Type or paste your text here to get suggestions."
              className="h-56 max-h-64"
              id="input-text"
            />
            <p className="text-sm text-muted-foreground">
              The AI will analyze your text and suggest improvements.
            </p>
          </div>
        </div>
        <div className="flex h-full items-center justify-center max-w-2xl border rounded-md p-4 shadow-md">
          <FixedTextViewer />
        </div>
      </div>
      <HoverBorderGradient
        containerClassName="rounded-full absolute top-1/2 right-1/2"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>FixMe</span>
        <SparklesIcon className="text-amber-400" />
      </HoverBorderGradient>
    </main>
  );
}
