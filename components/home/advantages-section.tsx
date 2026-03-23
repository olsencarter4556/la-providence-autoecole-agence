import { Projector, Snowflake, Languages, UserCheck } from "lucide-react"

const advantages = [
  {
    icon: Projector,
    title: "Cours projetés",
    description: "Formation moderne avec supports visuels",
  },
  {
    icon: Snowflake,
    title: "Salle climatisée",
    description: "Environnement confortable pour apprendre",
  },
  {
    icon: Languages,
    title: "Cours en Anglais",
    description: "Formation disponible pour Anglophones",
  },
  {
    icon: UserCheck,
    title: "Suivi particulier",
    description: "Accompagnement après examen",
  },
]

export function AdvantagesSection() {
  return (
    <section className="bg-[#8B0000] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Nos Atouts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Pourquoi choisir La Providence Auto-École
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="flex flex-col items-center rounded-xl bg-white/10 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#8B0000]">
                <advantage.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {advantage.title}
              </h3>
              <p className="text-sm text-white/80">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
