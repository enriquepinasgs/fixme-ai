import { BackgroundBeams } from "@/components/ui/background-beams";
import { Metadata } from "next";

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
    <div>
      {children}
      <BackgroundBeams />
    </div>
  );
}
