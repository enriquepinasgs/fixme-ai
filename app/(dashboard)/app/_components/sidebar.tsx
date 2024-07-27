"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { useGetMe, useGetTextsHistory } from "@/hooks/api-hook";
import { TextRow } from "@/lib/supabase.types";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function getComponent(
  data: TextRow[] | undefined,
  isLoading: boolean,
  isError: boolean,
  currentTextId: string | null
) {
  if (isLoading) {
    let loadingButtons: number[] = Array.from({ length: 5 }, (_, i) => i + 1);
    return (
      <div className="flex flex-col gap-2">
        {loadingButtons.map((_, idx) => (
          <div
            key={idx}
            className="flex h-10 w-full rounded-md bg-stone-100 animate-pulse "
          ></div>
        ))}
      </div>
    );
  }
  if (data) {
    return (
      <div className="flex flex-col overflow-y-auto overflow-x-hidden text-ellipsis">
        {data.map((text) => (
          <Link
            href={`/app/t/${text.id}`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start overflow-ellipsis ",
              currentTextId !== text.id ? "text-foreground/60" : "bg-accent"
            )}
            key={text.id}
          >
            <span className="text-ellipsis truncate">
              {text.title ?? text.id}
            </span>
          </Link>
        ))}
      </div>
    );
  }
  return <div>Error</div>;
}

export default function SideBar() {
  const router = useRouter();
  const pathName = usePathname();
  const currentTextId = pathName.split("/")[3];

  const { data, isLoading, isError } = useGetTextsHistory();
  const {
    data: meData,
    isLoading: meIsLoading,
    isError: meIsError,
  } = useGetMe();
  return (
    <div className="flex w-60 border-r p-4 bg-background flex-col justify-between overflow-hidden shrink-0 gap-2">
      <div className="flex flex-col gap-12 overflow-auto">
        <Link
          href={"/app"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "gap-2 text-start w-full justify-start"
          )}
        >
          <PlusIcon className="h-5 w-5 " /> New text
        </Link>
        {getComponent(
          data?.data.data as TextRow[],
          isLoading,
          isError,
          currentTextId
        )}
      </div>
      <Button variant={"outline"} disabled={meIsLoading}>
        Buy credits ({meData?.data.data.credits})
      </Button>
    </div>
  );
}
