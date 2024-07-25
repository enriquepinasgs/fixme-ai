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
import { useSignin } from "@/hooks/api-hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(50),
});

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useSignin();

  const router = useRouter();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    mutate(
      { email: data.email, password: data.password },
      {
        onSuccess: () => {
          router.push("/");
          toast.success("Logged in!");
        },
        onError: () => {
          toast.error("Invalid credentials");
        },
        onSettled: () => {
          setIsLoading(false);
        },
      }
    );
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-xs flex-col justify-center gap-4 bg-background border rounded-md p-4 shadow-md">
      <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Sign in</h2>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="pasword" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
}
