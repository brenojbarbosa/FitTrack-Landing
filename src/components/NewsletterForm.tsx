"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // Simula envio bem-sucedido
    setSuccess(true);
    setName("");
    setEmail("");
    setError("");
  };

  return (
    <section className="w-full py-16 px-6 bg-green-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Quer ser avisado quando lançarmos?</h2>
        <p className="text-gray-700 mb-6">Deixe seu nome e email e entraremos em contato no lançamento.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-4 py-2"
          />
          <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
            Quero ser avisado no lançamento
          </button>
        </form>

        {error && <p className="text-red-600 mt-2">{error}</p>}
        {success && <p className="text-green-700 mt-2">Obrigado! Seu cadastro foi realizado.</p>}
      </div>
    </section>
  );
}
