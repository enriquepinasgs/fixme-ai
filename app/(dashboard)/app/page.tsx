import FixedTextViewer from "@/components/fixed-text-viewer";
import TextInput from "@/components/text-input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="flex flex-col items-center md:items-start md:flex-row md:justify-evenly h-full w-full gap-4 p-4 "
      >
        <ResizablePanel defaultSize={50} minSize={25} className="h-full p-1">
          <TextInput classname="h-full" />
        </ResizablePanel>
        <ResizableHandle withHandle className="h-full" />
        <ResizablePanel defaultSize={50} minSize={25} className="h-full">
          <FixedTextViewer classname="h-full" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
