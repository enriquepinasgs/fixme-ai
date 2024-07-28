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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useResetPassword } from "@/hooks/api-hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const passwordRecoverySchema = z.object({
  email: z.string().email(),
});

export function PasswordRecoveryDialog({ classname }: { classname?: string }) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof passwordRecoverySchema>>({
    resolver: zodResolver(passwordRecoverySchema),
    defaultValues: {
      email: "",
    },
  });
  const { mutate } = useResetPassword();

  function onSubmit(values: z.infer<typeof passwordRecoverySchema>) {
    setIsLoading(true);
    mutate(values.email, {
      onSuccess: () => {
        toast.success("Check your email to recover your password!");
        setOpen(false);
      },
      onError: () => {
        toast.success(
          "Oops! There was an error sending the email to this email"
        );
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
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
        <button className="text-sm text-foreground/60">Recover password</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Password recovery</DialogTitle>
          <DialogDescription>
            Use your email to recover your password, we will send to your email
            the recovery instrucctions
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@mail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your email used to login.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button disabled={isLoading} type="submit">
                Recover
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
