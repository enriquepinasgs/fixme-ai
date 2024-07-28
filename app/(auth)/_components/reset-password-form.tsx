"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdatePassword } from "@/hooks/api-hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ResetPasswordSchema = z
  .object({
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  );

export default function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useUpdatePassword();

  const router = useRouter();

  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (!("code" in searchParams) || typeof searchParams.code !== "string") {
      router.push("/error");
      return;
    }
    setIsLoading(true);
    mutate(
      { newPassword: data.password, code: searchParams.code },
      {
        onSuccess: () => {
          toast.success("Password updated successfully!");
          router.push("/app");
        },
        onError: () => {
          toast.error("Ops! Something went wrong");
        },
        onSettled: () => {
          setIsLoading(false);
        },
      }
    );
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-sm flex-col justify-center gap-4 bg-background border rounded-md p-4 shadow-md">
      <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Sign up</h2>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="pasword" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="confirm pasword"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            Reset password
          </Button>
        </form>
      </Form>
    </div>
  );
}
