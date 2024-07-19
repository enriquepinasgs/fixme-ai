"use client";
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
import { cn } from "@/lib/utils";
import { useApiKeyStore } from "@/store/apikey-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRoundIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const apiKeyFormSchema = z.object({
  apiKey: z
    .string()
    .min(1, {
      message: "ApiKey cannot be empty",
    })
    .max(100, {
      message: "ApiKey is too long",
    }),
});

export function OpenAIApiKey({ classname }: { classname?: string }) {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof apiKeyFormSchema>>({
    resolver: zodResolver(apiKeyFormSchema),
    defaultValues: {
      apiKey: "",
    },
  });

  const { currentApiKey, setApiKey } = useApiKeyStore((state) => ({
    currentApiKey: state.apiKey,
    setApiKey: state.setApiKey,
  }));

  function onSubmit(values: z.infer<typeof apiKeyFormSchema>) {
    setApiKey(values.apiKey);
    setOpen(false);
  }
  function obscureString(input: string) {
    const length = input.length;
    const halfLength = Math.ceil(length / 2);
    const firstHalf = input.slice(0, halfLength);
    const secondHalf = "*".repeat(length - halfLength);
    return firstHalf + secondHalf;
  }
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        form.reset();
      }}
    >
      <DialogTrigger asChild>
        <Button
          className={cn(
            "",
            classname,
            currentApiKey === undefined
              ? "animate-pulse text-red-400 border-red-400"
              : ""
          )}
          variant="outline"
          size={"icon"}
        >
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="apiKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ApiKey</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        currentApiKey
                          ? obscureString(currentApiKey)
                          : "paste your openai apikey here"
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your private OpenAI api key.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
