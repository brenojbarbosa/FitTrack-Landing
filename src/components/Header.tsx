import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-black shadow">
      <Link href="/">
        <h1 className="text-xl font-bold text-white cursor-pointer">FitTrack</h1>
      </Link>

      <nav>
        <ul className="flex gap-4 text-sm text-gray-300">
      
          <li>
            <Link
              href={{ pathname: "/", hash: "features" }} 
              className="hover:text-white transition"
            >
              Funcionalidades
            </Link>
          </li>

       
          <li>
            <Link href="/newsletter" className="hover:text-white transition">
              NewsLetter
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
