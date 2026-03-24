import Image from "next/image"

const services: { title: string; description: string; image: string; imageAlt: string }[] = [
  {
    title: "Formation à la conduite",
    description:
      "Permis A, B, C, D, E, F, G avec cours théoriques et pratiques personnalisés, encadrés par des moniteurs expérimentés.",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Élève au volant lors d'une leçon de conduite",
  },
  {
    title: "Assurance véhicules",
    description:
      "Accompagnement complet pour souscrire ou renouveler votre assurance auto : conseils, dossiers et mise en relation.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Protection et assurance automobile",
  },
  {
    title: "Cartes grises",
    description:
      "Établissement, duplicata et renouvellement de cartes grises : nous vous guidons à chaque étape administrative.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Documents administratifs et dossier carte grise",
  },
  {
    title: "Plaques d'immatriculation",
    description:
      "Fabrication et pose de plaques conformes, personnalisées selon les normes en vigueur au Gabon.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Plaque d'immatriculation sur un véhicule",
  },
  {
    title: "Acquisition de véhicules",
    description:
      "Recherche, importation, vente et location : un interlocuteur unique pour votre projet d'achat ou de location.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Véhicule en concession, achat automobile",
  },
  {
    title: "Accompagnement administratif",
    description:
      "Assistance pour toutes vos démarches liées au véhicule : documents, formalités et suivi jusqu'à l'aboutissement.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Accompagnement administratif et dossiers",
  },
]

export function ServicesHighlight() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#8B0000]">
            Ce que nous offrons
          </span>
          <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Nos Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-gray-600 md:text-lg">
            Une gamme complète de services automobiles pour répondre à tous vos besoins, du permis aux démarches
            administratives.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#8B0000]/15"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-900 md:text-xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 md:text-[0.9375rem] md:leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
