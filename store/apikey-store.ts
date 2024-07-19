import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

type ApiKeyStore = {
  apiKey: string | undefined;
  setApiKey: (apiKey: string | undefined) => void;
};

export const useApiKeyStore = createWithEqualityFn<ApiKeyStore>(
  (set) => ({
    apiKey: undefined,
    setApiKey: (apiKey: string | undefined) =>
      set((state) => {
        return { ...state, apiKey };
      }),
  }),
  shallow
);
