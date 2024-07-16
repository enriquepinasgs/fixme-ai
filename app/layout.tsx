import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

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
          "min-h-screen bg-background font-sans antialiased overflow-hidden",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <BackgroundBeams />
        </ThemeProvider>
      </body>
    </html>
  );
}
