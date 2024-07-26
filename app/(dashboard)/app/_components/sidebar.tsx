"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { useGetTextsHistory } from "@/hooks/api-hook";
import { TextRow } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function getComponent(
  data: TextRow[] | undefined,
  isLoading: boolean,
  isError: boolean,
  currentTextId: string | null,
  router: AppRouterInstance
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
  return (
    <div className="flex w-60 border-r p-4 bg-background flex-col justify-between overflow-hidden shrink-0">
      <div className="flex flex-col gap-12 overflow-auto">
        <Button
          onClick={() => {
            router.push("/app");
          }}
          className="gap-2 text-start w-full justify-start"
          variant={"ghost"}
        >
          <PlusIcon className="h-[1.2rem] w-[1.2rem]" /> New text
        </Button>
        {getComponent(
          data?.data.data as TextRow[],
          isLoading,
          isError,
          currentTextId,
          router
        )}
      </div>
      <Button>Credits</Button>
    </div>
  );
}
