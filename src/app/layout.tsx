// Types
import type { Metadata } from "next";

// CN
import { cn } from "@/lib/utils";

// Font & Styles
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Micro SaaS FYI",
  description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn("bg-slate-50", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
