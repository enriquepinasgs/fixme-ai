"use client";

import { LinkPreview } from "@/components/ui/link-preview";
import { cn } from "@/lib/utils";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function Tittle({ classname }: { classname?: string }) {
  const words = [
    {
      text: "Improve",
    },
    {
      text: "any",
    },
    {
      text: "text",
    },
    {
      text: "with",
    },
    {
      text: "FixMe.ai",
      className: "text-primary",
    },
  ];
  return (
    <div
      className={cn("flex flex-col items-center justify-center ", classname)}
    >
      <TypewriterEffect words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-base mt-8 max-w-2xl text-center">
        FixMe.ai enhances your writing with grammar corrections, synonym
        suggestions, and style improvements using{" "}
        <LinkPreview
          url="https://sdk.vercel.ai/docs/introduction"
          className="font-bold"
        >
          Vercel AI SDK
        </LinkPreview>{" "}
        . Enter your text and let FixMe.ai do the rest!
      </p>
    </div>
  );
}
