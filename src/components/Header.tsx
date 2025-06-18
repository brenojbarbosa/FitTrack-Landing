export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white shadow">
      <h1 className="text-xl font-bold text-gray-900">FitTrack</h1>
      <nav>
        <ul className="flex gap-4 text-sm text-gray-700">
          <li><a href="#features" className="hover:text-gray-900">Funcionalidades</a></li>
          <li><a href="#cta" className="hover:text-gray-900">Inscreva-se</a></li>
        </ul>
      </nav>
    </header>
  )
}
