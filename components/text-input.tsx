import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function TextInput({ classname }: { classname?: string }) {
  return (
    <div className={cn("flex flex-col w-full gap-1.5", classname)}>
      <Label htmlFor="input-text">Your Text</Label>
      <Textarea
        placeholder="Type or paste your text here to get suggestions."
        className="h-96 max-h-96"
        id="input-text"
      />
      <p className="text-sm text-muted-foreground">
        The AI will analyze your text and suggest improvements.
      </p>
    </div>
  );
}
