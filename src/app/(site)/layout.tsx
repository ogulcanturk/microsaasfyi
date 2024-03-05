// Components
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";

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
    <div className="mx-auto flex max-w-5xl flex-col gap-12">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
