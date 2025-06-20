import Link from "next/link";

export default function Features() {
  const features = [
    {
      title: "Acompanhamento de Água",
      description: "Registre sua ingestão diária de água e mantenha-se hidratado.",
      link: "/agua",
    },
    {
      title: "Contador de Passos",
      description: "Monitore quantos passos você dá por dia e mantenha-se ativo.",
      link: "/passos",
    },
    {
      title: "Controle de Sono",
      description: "Acompanhe suas horas de sono e melhore sua qualidade de descanso.",
      link: "/sono",
    },
    {
      title: "Metas Personalizadas",
      description: "Defina metas diárias e alcance seus objetivos de saúde.",
      link: "/metas",
    },
  ];

  return (
    <section id="features" className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Funcionalidades do FitTrack</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Link href={feature.link} key={index}>
              <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
