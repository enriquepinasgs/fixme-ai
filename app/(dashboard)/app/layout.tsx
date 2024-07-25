import Navbar from "@/components/navbar";
import { Metadata } from "next";
import SideBar from "./_components/sidebar";

export const metadata: Metadata = {
  title: "FixMe app",
  description:
    "FixMe.ai enhances your writing with grammar corrections, synonym suggestions, and style improvements using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen relative">
      <Navbar classname="absolute top-0 right-0 left-0" />
      <div className="flex h-full w-full pt-12">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
