import FixedTextViewer from "@/components/fixed-text-viewer";
import Navbar from "@/components/navbar";
import { OpenAIApiKey } from "@/components/openai-apikey-dialog";
import TextInput from "@/components/text-input";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Tittle from "@/components/title";

export default function Home() {
  return (
    <main className="relative flex flex-col space-y-24 h-screen overflow-auto">
      <div className="flex flex-col gap-2 absolute top-0 right-0 m-6">
        <ThemeSwitcher />
        <OpenAIApiKey />
      </div>
      <Tittle classname="mt-24" />
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-evenly h-full w-full space-y-8 md:space-y-0">
        <TextInput classname="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl" />
        <FixedTextViewer classname="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl" />
      </div>
      <Navbar />
    </main>
  );
}
