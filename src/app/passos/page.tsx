import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PassosPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-6">Contador de Passos</h1>
          <p className="text-lg mb-4">Acompanhe quantos passos você dá por dia para manter-se ativo.</p>

          <div className="mb-8 p-4 border rounded bg-green-100">
            <h2 className="text-2xl font-semibold mb-2">Meta diária: 10.000 passos</h2>
            <p>Hoje você já caminhou: <span className="font-bold">6.300 passos</span></p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Sincronizar com dispositivo</button>
          </div>

          <a href="/" className="text-green-700 hover:underline">← Voltar para o início</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
