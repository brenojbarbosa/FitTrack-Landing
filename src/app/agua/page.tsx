import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AguaPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-6">Acompanhamento de Água</h1>
          <p className="text-lg mb-4">Mantenha-se hidratado registrando a quantidade de água que consome diariamente.</p>

          <div className="mb-8 p-4 border rounded bg-blue-100">
            <h2 className="text-2xl font-semibold mb-2">Meta diária: 2 Litros</h2>
            <p>Hoje você já ingeriu: <span className="font-bold">1.2 Litros</span></p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Registrar mais 250ml</button>
          </div>

          <a href="/" className="text-blue-700 hover:underline">← Voltar para o início</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
