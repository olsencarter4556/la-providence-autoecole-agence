import { PageHero } from "@/components/shared/page-hero"
import { Award, Users, Lightbulb, Shield, Target, Heart, BookOpen, Sparkles, User } from "lucide-react"
import { partners } from "@/lib/partners"

const visionItems = [
  {
    number: "01",
    title: "Référence en matière de formation de qualité",
    description: "Devenir l'auto-école de référence au Gabon en matière de formation professionnelle et de qualité.",
  },
  {
    number: "02",
    title: "Acteur de transformation sociale",
    description: "Contribuer à la transformation sociale en formant des conducteurs responsables et citoyens.",
  },
  {
    number: "03",
    title: "Modèle d'innovation pédagogique",
    description: "Innover constamment dans nos méthodes pédagogiques pour offrir une formation moderne et efficace.",
  },
  {
    number: "04",
    title: "Promoteur de la sécurité routière",
    description: "Promouvoir la sécurité routière et réduire les accidents sur les routes gabonaises.",
  },
]

const values = [
  { icon: Award, label: "Excellence", description: "Viser le meilleur en tout" },
  { icon: Target, label: "Discipline", description: "Rigueur et sérieux" },
  { icon: Heart, label: "Proximité", description: "Écoute et accompagnement" },
  { icon: Shield, label: "Responsabilité", description: "Engagement citoyen" },
  { icon: Lightbulb, label: "Innovation", description: "Méthodes modernes" },
]

const team = [
  { name: "M. Directeur", role: "Directeur Général", avatar: "DG" },
  { name: "M. Moniteur", role: "Moniteur de conduite", avatar: "MC" },
  { name: "Mme Agent", role: "Agent administratif", avatar: "AA" },
]

export default function AProposPage() {
  return (
    <>
      <PageHero
        title="À Propos de Nous"
        subtitle="Découvrez l'histoire, la vision et les valeurs de La Providence Auto-École"
        backgroundImage="https://images.unsplash.com/photo-1449965408869-ebd3fee56ce2?q=80&w=2070"
      />

      {/* Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#8B0000]">
                Notre Histoire
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
                Une passion pour la formation de qualité
              </h2>
              <p className="mb-4 text-gray-600 leading-relaxed">
                Fondée le <strong>16 août 2023</strong> à Okala Auberge, Libreville, La Providence Auto-École et Services est née d'une vision claire : professionnaliser la formation à la conduite au Gabon et contribuer à la sécurité routière nationale.
              </p>
              <p className="mb-4 text-gray-600 leading-relaxed">
                Notre établissement a été créé pour répondre au besoin croissant de formation de qualité dans le secteur automobile. Nous nous engageons à former des conducteurs compétents, responsables et respectueux du code de la route.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Avec une équipe pédagogique qualifiée et des équipements modernes, nous offrons un cadre d'apprentissage optimal pour garantir le succès de nos élèves aux examens de permis de conduire.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964')`,
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-6 shadow-xl">
                <p className="text-sm text-gray-500">Créée le</p>
                <p className="text-2xl font-bold text-[#8B0000]">16 août 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#8B0000]">
              Notre Vision
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Nos Objectifs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Quatre piliers qui guident notre action quotidienne
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {visionItems.map((item) => (
              <div
                key={item.number}
                className="group rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B0000] text-xl font-bold text-white">
                    {item.number}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Valeurs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#8B0000]">
              Ce qui nous définit
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Mission & Valeurs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Les principes fondamentaux qui orientent notre engagement
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <div
                key={value.label}
                className="group flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center transition-all hover:bg-[#8B0000]"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#8B0000]/10 text-[#8B0000] transition-colors group-hover:bg-white">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-white">
                  {value.label}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#8B0000]">
              Notre Équipe
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Des professionnels dévoués
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.role}
                className="group rounded-xl bg-white p-8 text-center shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#8B0000]/10 text-2xl font-bold text-[#8B0000]">
                  <User className="h-10 w-10" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#8B0000]">
              Nos Partenaires
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Ils nous font confiance
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 bg-[#8B0000]" />
            <p className="mx-auto mt-4 max-w-3xl text-gray-600 leading-relaxed">
              La Providence Auto-École et Services collabore avec des partenaires de confiance pour vous offrir des services complets et de qualité dans les domaines de la formation, de l'assurance et des services automobiles.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center gap-4 rounded-xl p-6 text-white shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: partner.bgColor }}
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                  <partner.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{partner.name}</h3>
                  <p className="text-sm opacity-90">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#8B0000] py-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="mx-auto max-w-4xl">
            <p className="font-serif text-2xl font-medium italic text-white md:text-3xl leading-relaxed">
              "Choisir La Providence, c'est opter pour une formation sérieuse, un encadrement de qualité et une vision responsable de la conduite."
            </p>
            <footer className="mt-6 text-white/80">
              — La Direction
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  )
}
