import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

type SuggestionStore = {
  originalText: string | undefined;
  setOriginalText: (text: string | undefined) => void;
  sentText: string | undefined;
  setSentText: (text: string | undefined) => void;
  suggestedText: string | undefined;
  setSuggestedText: (text: string | undefined) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

export const useSuggestionStore = createWithEqualityFn<SuggestionStore>(
  (set) => ({
    originalText: undefined,
    setOriginalText: (text: string | undefined) =>
      set((state) => {
        return { ...state, originalText: text };
      }),
    sentText: undefined,
    setSentText: (text: string | undefined) =>
      set((state) => {
        return { ...state, sentText: text };
      }),
    suggestedText: undefined,
    setSuggestedText: (text: string | undefined) =>
      set((state) => {
        return { ...state, suggestedText: text };
      }),
    isLoading: false,
    setIsLoading: (isLoading: boolean) =>
      set((state) => {
        return { ...state, isLoading };
      }),
  }),
  shallow
);
