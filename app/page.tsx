import FixedTextViewer from "@/components/fixed-text-viewer";
import Navbar from "@/components/navbar";
import TextInput from "@/components/text-input";
import Tittle from "@/components/title";

export default function Home() {
  return (
    <main className="relative flex flex-col space-y-24 h-screen overflow-hidden">
      <Tittle classname="mt-24" />
      <div className="flex flex-col md:flex-row justify-evenly h-full w-full space-y-8 md:space-y-0">
        <TextInput classname="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl" />
        <FixedTextViewer classname="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl" />
      </div>

      <Navbar />
    </main>
  );
}
