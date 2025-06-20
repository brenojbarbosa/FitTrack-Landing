import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MetasPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-6">Metas Personalizadas</h1>
          <p className="text-lg mb-4">Defina objetivos diários e acompanhe seu progresso.</p>

          <div className="mb-8 p-4 border rounded bg-yellow-100">
            <h2 className="text-2xl font-semibold mb-2">Suas metas atuais:</h2>
            <ul className="list-disc list-inside">
              <li>Beber 2 Litros de água por dia</li>
              <li>Dar 10.000 passos por dia</li>
              <li>Dormir ao menos 7 horas por noite</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Editar Metas</button>
          </div>

          <a href="/" className="text-yellow-700 hover:underline">← Voltar para o início</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
