import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { modes } from "@/lib/modes";
import { cn } from "@/lib/utils";

export function SelectMode({ classname }: { classname?: string }) {
  return (
    <Select defaultValue="fixme">
      <SelectTrigger className={cn("w-[180px]", classname)}>
        <SelectValue placeholder="Select a mode" />
      </SelectTrigger>
      <SelectContent className="overflow-visible">
        <SelectGroup>
          <SelectLabel>Modes</SelectLabel>
          {modes.map((mode) => (
            <SelectItem key={mode.name} value={mode.name.toLowerCase()}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>{mode.name}</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{mode.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
