"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AguaPage() {
  const [metaDiaria, setMetaDiaria] = useState<number | null>(null);
  const [consumoAtual, setConsumoAtual] = useState(0);
  const [metaInput, setMetaInput] = useState("");
  const [input, setInput] = useState("");

  const handleSetMeta = () => {
    const meta = parseInt(metaInput);
    if (!isNaN(meta) && meta > 0) {
      setMetaDiaria(meta);
      setMetaInput("");
      setConsumoAtual(0); 
    }
  };

  const handleRegistrar = () => {
    const quantidade = parseInt(input);
    if (!isNaN(quantidade) && quantidade > 0) {
      setConsumoAtual(consumoAtual + quantidade);
      setInput("");
    }
  };

  const progressoPorcentagem = metaDiaria
    ? Math.min((consumoAtual / metaDiaria) * 100, 100).toFixed(0)
    : "0";
  const metaAtingida = metaDiaria !== null && consumoAtual >= metaDiaria;

  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-6">Acompanhamento de Água</h1>

     
          {metaDiaria === null ? (
            <div className="mb-8 p-4 border rounded bg-blue-100">
              <h2 className="text-2xl font-semibold mb-4">Defina sua meta diária de água (ml)</h2>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Ex: 2000"
                  value={metaInput}
                  onChange={(e) => setMetaInput(e.target.value)}
                  className="border rounded px-3 py-2 w-full"
                />
                <button
                  onClick={handleSetMeta}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Salvar Meta
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-8 p-4 border rounded bg-blue-100">
              <h2 className="text-2xl font-semibold mb-2">Meta diária: {metaDiaria} ml</h2>
              <p className="mb-4">
                Total consumido hoje: <span className="font-bold">{consumoAtual} ml</span> ({progressoPorcentagem}% da meta)
              </p>

              {/* Barra de progresso */}
              <div className="w-full bg-blue-200 h-4 rounded overflow-hidden">
                <div
                  className={`h-4 transition-all duration-300 ${metaAtingida ? "bg-green-500" : "bg-blue-500"}`}
                  style={{ width: `${progressoPorcentagem}%` }}
                ></div>
              </div>

              {metaAtingida && (
                <p className="mt-4 text-green-700 font-semibold">🎉 Meta completada! Parabéns!</p>
              )}

              {/* Formulário de registro */}
              <div className="mt-6 flex gap-2">
                <input
                  type="number"
                  placeholder="Quantos ml?"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="border rounded px-3 py-2 w-full"
                />
                <button
                  onClick={handleRegistrar}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Registrar
                </button>
              </div>

              {/* Opção de redefinir meta */}
              <button
                onClick={() => setMetaDiaria(null)}
                className="mt-4 text-blue-700 underline text-sm"
              >
                Redefinir Meta
              </button>
            </div>
          )}

          <a href="/" className="text-blue-700 hover:underline">← Voltar para o início</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
