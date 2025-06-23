import { FaTint, FaWalking, FaBed, FaBullseye } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-green-100 to-white">
      <h2 className="text-4xl font-extrabold text-gray-900 max-w-2xl">
        Monitore seus hábitos. Melhore sua saúde.
      </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-xl">
        FitTrack é o app que te ajuda a acompanhar água, sono, passos e muito mais. Em breve disponível!
      </p>

      <div className="flex gap-10 text-green-700 text-3xl mt-10">
        <FaTint title="Água" />
        <FaWalking title="Passos" />
        <FaBed title="Sono" />
        <FaBullseye title="Metas" />
      </div>
    </section>
  );
}
