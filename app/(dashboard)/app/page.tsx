import FixedTextViewer from "@/components/fixed-text-viewer";
import TextInput from "@/components/text-input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full">
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-evenly h-full w-full gap-4 p-4 ">
        <TextInput classname="basis-1/2 h-full" />
        <Separator orientation="vertical" />
        <FixedTextViewer classname="basis-1/2 h-full" />
      </div>
    </main>
  );
}
