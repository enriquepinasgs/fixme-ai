import FixedTextViewer from "@/components/fixed-text-viewer";
import { OpenAIApiKeyDialog } from "@/components/openai-apikey-dialog";
import RequestSuggestion from "@/components/request-suggestion";
import TextInput from "@/components/text-input";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Title from "@/components/title";

export default function Home() {
  return (
    <main className="relative flex flex-col space-y-16 h-screen overflow-auto">
      <div className="flex flex-col gap-2 absolute top-0 right-0 m-6">
        <ThemeSwitcher />
        <OpenAIApiKeyDialog />
      </div>
      <Title classname="mt-24" />
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-evenly h-full w-full gap-8 p-4 pb-32 ">
        <TextInput classname="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl" />
        <FixedTextViewer classname="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl" />
      </div>
      <RequestSuggestion classname="fixed bottom-0 right-1/2  transform translate-x-1/2 -translate-y-1/2" />
    </main>
  );
}
