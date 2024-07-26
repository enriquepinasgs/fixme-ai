import { SigninUser } from "@/app/api/auth/signin/route";
import { FixMeInput } from "@/app/api/fixme/route";
import fixmeService from "@/services/fixme-ai";
import { useMutation } from "@tanstack/react-query";

const DEFAULT_CACHED_TIME = 1000 * 15 * 60; //15 mins

const DEFAULT_QUERY_OPTIONS = {
  staleTime: DEFAULT_CACHED_TIME,
  refetchOnWindowFocus: false,
};

const useSignin = () => {
  return useMutation({
    ...DEFAULT_QUERY_OPTIONS,
    mutationFn: ({ email, password }: SigninUser) =>
      fixmeService.signin({ email, password }),
  });
};

const useSignup = () => {
  return useMutation({
    ...DEFAULT_QUERY_OPTIONS,
    mutationFn: ({ email, password }: SigninUser) =>
      fixmeService.signup({ email, password }),
  });
};
const useSignOut = () => {
  return useMutation({
    ...DEFAULT_QUERY_OPTIONS,
    mutationFn: () => fixmeService.signOut(),
  });
};

const useFixText = () => {
  return useMutation({
    ...DEFAULT_QUERY_OPTIONS,
    mutationFn: ({ text, mode }: FixMeInput) =>
      fixmeService.fixText({ text, mode }),
  });
};

export { useFixText, useSignin, useSignOut, useSignup };
