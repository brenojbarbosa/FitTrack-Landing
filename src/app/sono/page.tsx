"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SonoPage() {
  const [metaDiaria, setMetaDiaria] = useState<number | null>(null);
  const [horasAtuais, setHorasAtuais] = useState(0);
  const [metaInput, setMetaInput] = useState("");
  const [input, setInput] = useState("");

  const handleSetMeta = () => {
    const meta = parseFloat(metaInput);
    if (!isNaN(meta) && meta > 0) {
      setMetaDiaria(meta);
      setMetaInput("");
      setHorasAtuais(0);
    }
  };

  const handleRegistrar = () => {
    const quantidade = parseFloat(input);
    if (!isNaN(quantidade) && quantidade > 0) {
      setHorasAtuais(horasAtuais + quantidade);
      setInput("");
    }
  };

  const progressoPorcentagem = metaDiaria
    ? Math.min((horasAtuais / metaDiaria) * 100, 100).toFixed(0)
    : "0";
  const metaAtingida = metaDiaria !== null && horasAtuais >= metaDiaria;

  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-6">Controle de Sono</h1>

          {metaDiaria === null ? (
            <div className="p-4 border rounded bg-purple-100">
              <h2 className="text-2xl font-semibold mb-4">Defina sua meta diária de sono (horas)</h2>
              <div className="flex gap-2">
                <input
                  type="number"
                  step="0.1"
                  placeholder="Ex: 8"
                  value={metaInput}
                  onChange={(e) => setMetaInput(e.target.value)}
                  className="border rounded px-3 py-2 w-full"
                />
                <button
                  onClick={handleSetMeta}
                  className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                >
                  Salvar Meta
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 border rounded bg-purple-100">
              <h2 className="text-2xl font-semibold mb-2">Meta diária: {metaDiaria} horas</h2>
              <p className="mb-4">
                Total de sono hoje: <span className="font-bold">{horasAtuais} horas</span> ({progressoPorcentagem}% da meta)
              </p>

              <div className="w-full bg-purple-200 h-4 rounded overflow-hidden">
                <div
                  className={`h-4 transition-all duration-300 ${metaAtingida ? "bg-green-500" : "bg-purple-500"}`}
                  style={{ width: `${progressoPorcentagem}%` }}
                ></div>
              </div>

              {metaAtingida && (
                <p className="mt-4 text-green-700 font-semibold">🎉 Meta de sono completada! Muito bem!</p>
              )}

              <div className="mt-6 flex gap-2">
                <input
                  type="number"
                  step="0.1"
                  placeholder="Quantas horas?"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="border rounded px-3 py-2 w-full"
                />
                <button
                  onClick={handleRegistrar}
                  className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                >
                  Registrar
                </button>
              </div>

              <button
                onClick={() => setMetaDiaria(null)}
                className="mt-4 text-purple-700 underline text-sm"
              >
                Redefinir Meta
              </button>
            </div>
          )}

          <a href="/" className="text-purple-700 hover:underline">← Voltar para o início</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
