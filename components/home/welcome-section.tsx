import Link from "next/link"

export function WelcomeSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-[#8B0000]">
              Bienvenue
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              La Providence Auto-École et Services
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Fondée le 16 août 2023 à Okala Auberge, Libreville, La Providence Auto-École et Services est née de la volonté de professionnaliser la formation à la conduite au Gabon.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Notre mission est de former des conducteurs responsables et compétents, tout en offrant une gamme complète de services automobiles pour accompagner nos clients dans toutes leurs démarches.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/a-propos"
                className="rounded-md bg-[#8B0000] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[#6B0000]"
              >
                En savoir plus
              </Link>
              <Link
                href="/contact"
                className="rounded-md border-2 border-[#8B0000] px-6 py-3 text-center font-semibold text-[#8B0000] transition-colors hover:bg-[#8B0000] hover:text-white"
              >
                Nous contacter
              </Link>
            </div>
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
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-[#8B0000] p-6 text-white shadow-xl">
              <p className="text-4xl font-bold">2023</p>
              <p className="text-sm">Année de création</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
