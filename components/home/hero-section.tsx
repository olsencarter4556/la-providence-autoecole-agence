import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-[rgba(139,0,0,0.72)]" />

      <div className="relative container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center text-white">
        <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
          Depuis 2023 - Okala Auberge, Libreville
        </span>
        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance">
          Obtenez votre Permis
          <br />
          <span className="text-yellow-400">A, B, C, D, E, F, G</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl text-pretty">
          Votre succès sur la route commence ici. Formation professionnelle, accompagnement personnalisé et résultats garantis.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-[#8B0000] shadow-lg transition-all hover:bg-gray-100 hover:scale-105"
          >
            S'inscrire maintenant
          </Link>
          <Link
            href="/services"
            className="rounded-md border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#8B0000]"
          >
            Découvrir nos services
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 px-4 py-6 text-center text-white md:justify-around">
          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-white/80">Élèves formés</p>
          </div>
          <div>
            <p className="text-3xl font-bold">95%</p>
            <p className="text-sm text-white/80">Taux de réussite</p>
          </div>
          <div>
            <p className="text-3xl font-bold">7</p>
            <p className="text-sm text-white/80">Types de permis</p>
          </div>
          <div>
            <p className="text-3xl font-bold">6+</p>
            <p className="text-sm text-white/80">Services disponibles</p>
          </div>
        </div>
      </div>
    </section>
  )
}