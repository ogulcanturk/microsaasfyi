// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Micro SaaS FYI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="">
      {children}
    </div>
  );
}
