import { cn } from "@/lib/utils";
import { LinkPreview } from "./ui/link-preview";

export default function Footer({ classname }: { classname?: string }) {
  return (
    <footer
      className={cn(
        "text-xs invisible md:visible text-foreground/50",
        classname
      )}
    >
      <span>
        Created by Enrique Pina. Credits to{" "}
        <LinkPreview
          url="https://ui.shadcn.com/"
          isStatic={true}
          imageSrc="shadcn.webp"
          className="underline text-foreground/50"
        >
          Shadcn/UI
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          url="https://ui.aceternity.com/"
          isStatic={true}
          imageSrc="aceternity.webp"
          className="underline text-foreground/50"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for component design libraries
      </span>
    </footer>
  );
}
