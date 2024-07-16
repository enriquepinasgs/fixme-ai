import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";

import Footer from "@/components/footer";
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
          "min-h-screen bg-background font-sans antialiased overflow-hidden relative",
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
          <Footer classname="absolute bottom-0 right-0" />
          <Toaster />
          <BackgroundBeams />
        </ThemeProvider>
      </body>
    </html>
  );
}
