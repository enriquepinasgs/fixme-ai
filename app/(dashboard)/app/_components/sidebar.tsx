"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const router = useRouter();
  return (
    <div className="flex w-56 border-r p-6 bg-background">
      <Button
        onClick={() => {
          router.push("/app");
        }}
        className="gap-2 text-start w-full justify-start"
        variant={"ghost"}
      >
        <PlusIcon className="h-[1.2rem] w-[1.2rem]" /> New text
      </Button>
    </div>
  );
}
