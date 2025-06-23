import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-black shadow">
      <h1 className="text-xl font-bold text-white">FitTrack</h1>
      <nav>
        <ul className="flex gap-4 text-sm text-gray-300">
          <li>
            <a href="#features" className="hover:text-white transition">
              Funcionalidades
            </a>
          </li>
          <li>
            <Link href="/newsletter">NewsLetter</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
