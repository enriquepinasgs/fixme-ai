import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { modes } from "@/lib/modes";
import { cn } from "@/lib/utils";
import { CircleHelpIcon, SparklesIcon } from "lucide-react";
import { SelectMode } from "./select-mode";
import { Button } from "./ui/button";

export default function RequestModeForm({ classname }: { classname?: string }) {
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

      <SelectMode />
      <Button className="gap-2">
        <span>Submit</span> <SparklesIcon className="w-4 h-4"></SparklesIcon>
      </Button>
    </div>
  );
}
