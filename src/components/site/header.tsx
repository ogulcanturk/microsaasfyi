export default function Header({}) {
  return (
    <header className="w-full h-16 bg-slate-200">
      <div className="m-auto max-w-6xl flex items-center justify-between">
        <div className="flex">
          <a href="/#" className="">microsaasfyi</a>
          <nav className="">
            <a href="/use-cases">use cases</a>
            <a href="/docs">docs</a>
          </nav>
        </div>
        <span className="">Call to Action</span>
      </div>
    </header>
  );
}
