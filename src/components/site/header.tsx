export default function Header({}) {
  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-6">
          <span className="">Logo</span>
          <span className="">Nav</span>
        </div>
        <span className="">Call to Action</span>
      </div>
    </header>
  );
}
