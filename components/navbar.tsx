import { createClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import UserDropdown from "./user-dropdown";

export default async function Navbar({ classname }: { classname?: string }) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) redirect("/signin");
  return (
    <nav
      className={cn(
        "h-12 border-b flex w-full px-4 backdrop-blur-sm items-center justify-between",
        classname
      )}
    >
      <p>
        <span className="font-bold text-xl">Fixme.</span>
        <span className="text-primary font-bold text-xl">ai</span>
      </p>
      <UserDropdown user={data.user} />
    </nav>
  );
}
