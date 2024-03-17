import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex flex-wrap justify-between items-center p-4 border-b">
      <div className="flex mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
      <div className="flex gap-4 text-xl">
        <Link href='tasks'>Tasks</Link>
        <Link href='#'>habits</Link>
        <Link href='#'>Products</Link>
        <Link href='#'>Setting</Link>
      </div>
      <div className="flex mr-6">
        <Link href="#" className="px-4 py-2 border rounded hover:border-transparent hover:text-teal-500 hover:bg-black">Download</Link>
      </div>
    </nav>
  )
}