"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PassosPage() {
  const [metaDiaria, setMetaDiaria] = useState<number | null>(null);
  const [passosAtual, setPassosAtual] = useState(0);
  const [metaInput, setMetaInput] = useState("");
  const [input, setInput] = useState("");

  const handleSetMeta = () => {
    const meta = parseInt(metaInput);
    if (!isNaN(meta) && meta > 0) {
      setMetaDiaria(meta);
      setMetaInput("");
      setPassosAtual(0);
    }
  };

  const handleRegistrar = () => {
    const quantidade = parseInt(input);
    if (!isNaN(quantidade) && quantidade > 0) {
      setPassosAtual(passosAtual + quantidade);
      setInput("");
    }
  };

  const progressoPorcentagem = metaDiaria
    ? Math.min((passosAtual / metaDiaria) * 100, 100).toFixed(0)
    : "0";
  const metaAtingida = metaDiaria !== null && passosAtual >= metaDiaria;

  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-6">Contador de Passos</h1>

          {metaDiaria === null ? (
            <div className="p-4 border rounded bg-yellow-100">
              <h2 className="text-2xl font-semibold mb-4">Defina sua meta diária de passos</h2>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Ex: 8000"
                  value={metaInput}
                  onChange={(e) => setMetaInput(e.target.value)}
                  className="border rounded px-3 py-2 w-full"
                />
                <button
                  onClick={handleSetMeta}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Salvar Meta
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 border rounded bg-yellow-100">
              <h2 className="text-2xl font-semibold mb-2">Meta diária: {metaDiaria} passos</h2>
              <p className="mb-4">
                Total de passos hoje: <span className="font-bold">{passosAtual}</span> ({progressoPorcentagem}% da meta)
              </p>

              <div className="w-full bg-yellow-200 h-4 rounded overflow-hidden">
                <div
                  className={`h-4 transition-all duration-300 ${metaAtingida ? "bg-green-500" : "bg-yellow-500"}`}
                  style={{ width: `${progressoPorcentagem}%` }}
                ></div>
              </div>

              {metaAtingida && (
                <p className="mt-4 text-green-700 font-semibold">🎉 Meta de passos completada! Parabéns!</p>
              )}

              <div className="mt-6 flex gap-2">
                <input
                  type="number"
                  placeholder="Quantos passos?"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="border rounded px-3 py-2 w-full"
                />
                <button
                  onClick={handleRegistrar}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Registrar
                </button>
              </div>

              <button
                onClick={() => setMetaDiaria(null)}
                className="mt-4 text-yellow-700 underline text-sm"
              >
                Redefinir Meta
              </button>
            </div>
          )}

          <a href="/" className="text-yellow-700 hover:underline">← Voltar para o início</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
