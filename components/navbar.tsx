"use client";
import { AngryIcon, LaughIcon, SparklesIcon } from "lucide-react";
import NavbarItem from "./navbar-item";

export default function Navbar() {
  return (
    <div className="flex border rounded-full fixed bottom-0 right-1/2  transform translate-x-1/2 -translate-y-1/2  backdrop-blur-sm bg-background hover:shadow-md transition-all">
      <NavbarItem
        name="FixMe"
        icon={SparklesIcon}
        iconClassName="text-amber-400"
      />
      <NavbarItem
        name="Funny"
        icon={LaughIcon}
        iconClassName="text-green-500"
      />
      <NavbarItem name="Angry" icon={AngryIcon} iconClassName="text-red-500" />
    </div>
  );
}
