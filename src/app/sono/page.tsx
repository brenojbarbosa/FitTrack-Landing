import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SonoPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-6">Controle de Sono</h1>
          <p className="text-lg mb-4">Monitore suas horas de sono e melhore sua qualidade de descanso.</p>

          <div className="mb-8 p-4 border rounded bg-purple-100">
            <h2 className="text-2xl font-semibold mb-2">Última noite:</h2>
            <p>Dormiu: <span className="font-bold">7h 45min</span></p>
            <p>Qualidade: <span className="font-bold">Boa</span></p>
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">Ver histórico semanal</button>
          </div>

          <a href="/" className="text-purple-700 hover:underline">← Voltar para o início</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
