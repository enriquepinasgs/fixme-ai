import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";

import Footer from "@/components/footer";
import ReactQueryProvider from "@/components/react-query-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FixMe",
  description:
    "FixMe.ai enhances your writing with grammar corrections, synonym suggestions, and style improvements using AI",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-hidden relative",
          fontSans.variable
        )}
      >
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Footer classname="absolute bottom-0 right-0 mr-2" />
            <Toaster />
            <BackgroundBeams />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
