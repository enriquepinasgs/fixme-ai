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
import { Mode, modes } from "@/lib/modes";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export function SelectMode({
  classname,
  onChange,
}: {
  classname?: string;
  onChange: (mode: Mode | undefined) => void;
}) {
  const defaultMode = modes.find((m) => m.name === "FixMe");

  useEffect(() => {
    onChange(defaultMode);
  }, [onChange, defaultMode]);
  return (
    <Select
      defaultValue={defaultMode?.name}
      onValueChange={(value) => {
        onChange(modes.find((m) => m.name === value));
      }}
    >
      <SelectTrigger className={cn("w-[180px]", classname)}>
        <SelectValue placeholder="Select a mode" />
      </SelectTrigger>
      <SelectContent className="overflow-visible">
        <SelectGroup>
          <SelectLabel>Modes</SelectLabel>
          {modes.map((mode) => (
            <SelectItem key={mode.name} value={mode.name}>
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
