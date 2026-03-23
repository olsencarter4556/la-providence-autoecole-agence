import Link from "next/link"
import { Check, Star } from "lucide-react"

const formations = [
  {
    name: "Formation Normale",
    duration: "2 mois",
    price: "120 000",
    features: [
      "Cours théoriques complets",
      "Cours pratiques progressifs",
      "Support de cours inclus",
      "Suivi personnalisé",
    ],
    popular: false,
  },
  {
    name: "Formation Accélérée",
    duration: "1 mois",
    price: "150 000",
    features: [
      "Formation intensive",
      "Cours théoriques et pratiques",
      "Support de cours inclus",
      "Suivi renforcé",
      "Priorité aux examens",
    ],
    popular: true,
  },
  {
    name: "Formation Express",
    duration: "3 semaines",
    price: "180 000",
    features: [
      "Formation ultra-intensive",
      "Sessions quotidiennes",
      "Support de cours inclus",
      "Accompagnement premium",
      "Priorité maximale",
    ],
    popular: false,
  },
  {
    name: "Perfectionnement",
    duration: "1 à 2 semaines",
    price: "30 000 - 60 000",
    features: [
      "Pour conducteurs expérimentés",
      "Remise à niveau",
      "Cours personnalisés",
      "Flexible selon vos besoins",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#8B0000]">
            Tarifs transparents
          </span>
          <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Nos Formations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Choisissez la formule qui correspond à votre emploi du temps et vos objectifs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {formations.map((formation) => (
            <div
              key={formation.name}
              className={`relative rounded-2xl border-2 p-6 transition-all hover:shadow-lg ${
                formation.popular
                  ? "border-[#8B0000] bg-[#8B0000]/5"
                  : "border-gray-200 bg-white"
              }`}
            >
              {formation.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#8B0000] px-3 py-1 text-xs font-semibold text-white">
                    <Star className="h-3 w-3" />
                    Populaire
                  </span>
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {formation.name}
                </h3>
                <p className="text-sm text-gray-500">{formation.duration}</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#8B0000]">
                  {formation.price}
                </span>
                <span className="text-sm text-gray-500"> FCFA</span>
              </div>
              <ul className="mb-6 space-y-3">
                {formation.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block w-full rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                  formation.popular
                    ? "bg-[#8B0000] text-white hover:bg-[#6B0000]"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                S'inscrire
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
