// Components
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="m-auto max-w-6xl flex gap-8 my-8">
        {children}
      </main>
      <Footer />
    </>
  );
};
