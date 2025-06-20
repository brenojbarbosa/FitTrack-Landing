export default function CTA() {
  return (
    <section id="cta" className="w-full py-20 px-6 bg-green-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Receba novidades do lançamento</h2>
      <p className="mb-6 max-w-xl mx-auto">Insira seu e-mail para ser avisado assim que o FitTrack estiver disponível.</p>
      <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="Seu e-mail"
          className="w-full px-4 py-3 rounded text-gray-900"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-green-600 font-semibold rounded hover:bg-gray-100 transition"
        >
          Quero ser avisado
        </button>
      </form>
    </section>
  )
}
