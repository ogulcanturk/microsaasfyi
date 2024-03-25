export default function Header({}) {
  return (
    <header className="w-full h-16 bg-slate-200">
      <div className="h-full m-auto max-w-6xl flex items-center justify-between">
        <div className="flex gap-10">
          <a href="/#" className="">microsaasfyi</a>
          <nav className="space-x-4">
            <a href="/use-cases" className="font-medium text-slate-900 hover:underline">Use Cases</a>
            <a href="/docs" className="font-medium text-slate-900 hover:underline">Docs</a>
          </nav>
        </div>
        <div className="w-96 h-full hidden sm:flex items-center justify-between bg-slate-300">
          <span className="">Call to Action</span>
        </div>
      </div>
    </header>
  );
}
