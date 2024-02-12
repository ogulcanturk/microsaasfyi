// Types
import { Inter } from "next/font/google";

// Font & Styles
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Micro SaaS FYI",
  description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
