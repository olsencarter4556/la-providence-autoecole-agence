import type { ComponentType } from "react"
import {
  IconProjectorRich,
  IconClimRich,
  IconLanguagesRich,
  IconSuiviRich,
} from "@/components/icons/brand-illustrations"

type AdvIcon = ComponentType<{ className?: string }>

const advantages: { Icon: AdvIcon; title: string; description: string }[] = [
  {
    Icon: IconProjectorRich,
    title: "Cours projetés",
    description: "Supports visuels modernes en salle pour des cours théoriques clairs et mémorables.",
  },
  {
    Icon: IconClimRich,
    title: "Salle climatisée",
    description: "Un cadre confortable pour suivre les cours dans les meilleures conditions, toute l’année.",
  },
  {
    Icon: IconLanguagesRich,
    title: "Cours en anglais",
    description: "Formation accessible aux anglophones, avec explications adaptées à votre langue.",
  },
  {
    Icon: IconSuiviRich,
    title: "Suivi personnalisé",
    description: "Accompagnement après l’examen et suivi de votre progression tout au long de la formation.",
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
              className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/10 p-6 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/20"
            >
              <div className="mb-5 flex h-[4.75rem] w-[4.75rem] shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-md ring-2 ring-white/40 transition-transform duration-300 hover:scale-105">
                <advantage.Icon className="h-full w-full" />
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-white md:text-xl">
                {advantage.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/85 md:text-[0.9375rem]">
                {advantage.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
