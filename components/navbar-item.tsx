"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

export default function NavbarItem({
  name,
  icon: Icon,
  iconClassName,
}: {
  name: string;
  icon: LucideIcon;
  iconClassName?: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "relative flex gap-2 items-center  px-4 py-1 rounded-full transition-all",
        hover ? "" : "text-foreground/80"
      )}
    >
      <span>{name}</span>
      <Icon className={cn("h-4 w-4", iconClassName)} />
      {hover ? (
        <motion.div
          className="absolute left-0 right-0 h-full bg-stone-50 dark:bg-stone-800 rounded-full -z-50"
          layoutId="navbar"
          aria-hidden="true"
          transition={{
            type: "spring",
            duration: 0.5,
          }}
        />
      ) : null}
    </button>
  );
}
