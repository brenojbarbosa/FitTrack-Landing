"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setError("");
    setShowToast(true);
    setName("");
    setEmail("");

    setTimeout(() => {
      setShowToast(false);
      router.push("/");
    }, 1500);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-green-50 px-4 relative">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
          🚀 Seja o primeiro a saber!
        </h2>
        <p className="text-gray-700 mb-6">
          Deixe seu nome e email para receber novidades sobre o lançamento do FitTrack.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-600 text-gray-900"
          />
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-600 text-gray-900"
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
          >
            Quero ser avisado no lançamento
          </button>
        </form>

        {error && <p className="text-red-600 mt-3">{error}</p>}

        <a
          href="/"
          className="mt-6 inline-block text-green-700 hover:underline text-sm font-medium"
        >
          ← Voltar para a Home
        </a>
      </div>

      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-6 py-3 rounded shadow-lg animate-fadeInOut">
          Cadastro realizado com sucesso! 🎉
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          10%, 90% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
        }
        .animate-fadeInOut {
          animation: fadeInOut 2s ease forwards;
        }
      `}</style>
    </section>
  );
}
