// Types
import { Inter as FontSans } from "next/font/google";

// CN
import { cn } from "@/lib/utils";

// Font & Styles
import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Micro SaaS FYI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn("bg-slate-100", fontSans.variable)}>{children}</body>
    </html>
  );
}
