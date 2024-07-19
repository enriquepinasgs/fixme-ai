import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

type ApiKeyStore = {
  apiKey: string | undefined;
  setApiKey: (apiKey: string | undefined) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (open: boolean) => void;
};

export const useApiKeyStore = createWithEqualityFn<ApiKeyStore>(
  (set) => ({
    apiKey: undefined,
    modalIsOpen: false,
    setApiKey: (apiKey: string | undefined) =>
      set((state) => {
        return { ...state, apiKey };
      }),
    setModalIsOpen: (open: boolean) =>
      set((state) => {
        return { ...state, modalIsOpen: open };
      }),
  }),
  shallow
);
