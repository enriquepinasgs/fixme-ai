import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { KeyRoundIcon } from "lucide-react";

export function OpenAIApiKey({ classname }: { classname?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn(classname)} variant="outline" size={"icon"}>
          <KeyRoundIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add an OpenAI ApiKey</DialogTitle>
          <DialogDescription>
            It will be used by the Vercel AI SDK. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">ApiKey</Label>
          <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
