"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useGetTextById } from "@/hooks/api-hook";
import { TextRow } from "@/lib/supabase.types";
import { FrownIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import SuggestedText from "./_components/suggested-text";

export default function TextPage({ params }: { params: { id: string } }) {
  const [showErrors, setShowErrors] = useState(true);
  const [diffMode, setDiffMode] = useState<string>("words");
  const { data, isLoading, isError } = useGetTextById(params.id);
  if (isLoading)
    return (
      <div className=" flex h-full w-full items-center justify-center">
        <Loader2 className="animate-spin"></Loader2>
      </div>
    );
  if (isError)
    return (
      <div className="flex flex-col text-foreground/60 text-5xl h-full w-full items-center justify-center gap-4">
        <FrownIcon className="w-20 h-20" />
        <p>Something went wrong</p>
      </div>
    );
  if (data) {
    const rawData = data.data.data as TextRow;
    return (
      <main className="p-4 w-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="flex flex-col items-center md:items-start md:flex-row md:justify-evenly h-full w-full gap-4"
        >
          <ResizablePanel defaultSize={50} minSize={25} className="h-full">
            <p className="whitespace-pre-line">{rawData.original}</p>
          </ResizablePanel>
          <ResizableHandle withHandle className="h-full" />
          <ResizablePanel defaultSize={50} minSize={25} className="h-full">
            <SuggestedText
              originalText={rawData.original}
              suggestedText={rawData.suggested}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    );
  }
}
