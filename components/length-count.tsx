import { useSuggestionStore } from "@/store/suggestion-store";

export default function LengthCount({ classname }: { classname?: string }) {
  const originalText = useSuggestionStore((state) => state.originalText);
  return (
    <span className={classname}>
      {originalText === undefined || originalText.length === 0
        ? 0
        : originalText.trim().split(" ").length}
      <span> words</span>
    </span>
  );
}
