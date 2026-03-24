import Image from "next/image"

const advantages: { title: string; description: string; image: string; imageAlt: string }[] = [
  {
    title: "Cours projetés",
    description: "Supports visuels modernes en salle pour des cours théoriques clairs et mémorables.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Salle de cours et projection pédagogique",
  },
  {
    title: "Salle climatisée",
    description: "Un cadre confortable pour suivre les cours dans les meilleures conditions, toute l'année.",
    image:
      "https://images.unsplash.com/photo-1497366216548-375260702974?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Espace de formation moderne et lumineux",
  },
  {
    title: "Cours en anglais",
    description: "Formation accessible aux anglophones, avec explications adaptées à votre langue.",
    image:
      "https://images.unsplash.com/photo-1527866959252-deac0bf71eab?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Communication et apprentissage des langues",
  },
  {
    title: "Suivi personnalisé",
    description: "Accompagnement après l'examen et suivi de votre progression tout au long de la formation.",
    image:
      "https://images.unsplash.com/photo-1529156069898-499833e11f54?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Accompagnement et suivi personnalisé des élèves",
  },
]

export function AdvantagesSection() {
  return (
    <section className="bg-[#8B0000] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-white drop-shadow-sm md:text-4xl">
            Nos Atouts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-white/90 md:text-lg">
            Pourquoi choisir La Providence Auto-École : équipements, confort et pédagogie au service de votre réussite.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15"
            >
              <div className="relative mx-4 mt-4 aspect-[4/3] w-[calc(100%-2rem)] shrink-0 overflow-hidden rounded-xl bg-black/20 ring-2 ring-white/30">
                <Image
                  src={advantage.image}
                  alt={advantage.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 text-center">
                <h3 className="mb-2 text-lg font-semibold leading-snug text-white md:text-xl">
                  {advantage.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/85 md:text-[0.9375rem]">
                  {advantage.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
