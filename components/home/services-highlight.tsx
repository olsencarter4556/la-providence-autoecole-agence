import { Car, Shield, FileText, CreditCard, ShoppingCart, ClipboardList } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Formation à la conduite",
    description: "Permis A, B, C, D, E, F, G avec cours théoriques et pratiques personnalisés",
  },
  {
    icon: Shield,
    title: "Assurance véhicules",
    description: "Accompagnement complet pour tous vos besoins en assurance automobile",
  },
  {
    icon: FileText,
    title: "Cartes grises",
    description: "Établissement et renouvellement de vos cartes grises en toute simplicité",
  },
  {
    icon: CreditCard,
    title: "Plaques d'immatriculation",
    description: "Fabrication de plaques d'immatriculation personnalisées",
  },
  {
    icon: ShoppingCart,
    title: "Acquisition de véhicules",
    description: "Recherche, importation, vente et location de véhicules",
  },
  {
    icon: ClipboardList,
    title: "Accompagnement administratif",
    description: "Assistance dans toutes vos démarches automobiles administratives",
  },
]

export function ServicesHighlight() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#8B0000]">
            Ce que nous offrons
          </span>
          <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Nos Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Une gamme complète de services automobiles pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#8B0000]/10 text-[#8B0000] transition-colors group-hover:bg-[#8B0000] group-hover:text-white">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
