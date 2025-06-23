"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Meta = {
  texto: string;
  concluida: boolean;
};

export default function MetasPage() {
  const [metas, setMetas] = useState<Meta[]>([]);
  const [input, setInput] = useState("");

  const handleAddMeta = () => {
    if (input.trim()) {
      setMetas([...metas, { texto: input.trim(), concluida: false }]);
      setInput("");
    }
  };

  const toggleConcluida = (index: number) => {
    const novasMetas = [...metas];
    novasMetas[index].concluida = !novasMetas[index].concluida;
    setMetas(novasMetas);
  };

  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto py-20 px-6">
          <h1 className="text-4xl font-bold mb-6">Metas Personalizadas</h1>
          <p className="text-lg mb-4">Crie suas próprias metas e marque como concluídas quando terminar:</p>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Digite sua meta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            />
            <button
              onClick={handleAddMeta}
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
            >
              Adicionar
            </button>
          </div>

          <ul className="space-y-3">
            {metas.map((meta, index) => (
              <li
                key={index}
                onClick={() => toggleConcluida(index)}
                className={`p-3 border rounded cursor-pointer transition ${
                  meta.concluida
                    ? "bg-green-100 line-through text-gray-500"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {meta.texto}
              </li>
            ))}
          </ul>

          <a href="/" className="block mt-8 text-teal-700 hover:underline">← Voltar para o início</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
