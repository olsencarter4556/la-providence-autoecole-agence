import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
      <Image
        src="/auto-ecole-ordinaire.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={92}
      />
      <div
        className="absolute inset-0 z-[1] bg-[rgba(139,0,0,0.72)]"
        aria-hidden
      />

      <div className="relative z-[2] container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center text-white">
        <span className="mb-5 inline-block rounded-full border border-white/25 bg-white/15 px-5 py-2 text-sm font-semibold tracking-wide text-white shadow-lg backdrop-blur-md">
          Depuis 2023 · Okala Auberge, Libreville
        </span>
        <p className="mb-3 max-w-3xl font-serif text-xl font-semibold leading-snug text-yellow-300 drop-shadow-md md:text-2xl lg:text-3xl text-balance">
          L’auto-école qui vous fait passer du rêve au permis — avec exigence et bienveillance.
        </p>
        <h1 className="mb-6 font-serif text-4xl font-bold leading-[1.15] tracking-tight drop-shadow-lg md:text-5xl lg:text-6xl xl:text-7xl text-balance">
          Obtenez votre permis
          <br />
          <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
            A, B, C, D, E, F, G
          </span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/95 text-pretty shadow-black/20 drop-shadow-md md:text-xl">
          Formation professionnelle, moniteurs à l’écoute et méthodes modernes : votre réussite sur la route est notre
          priorité.
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

      <div className="absolute bottom-0 left-0 right-0 z-[2] bg-black/40 backdrop-blur-sm">
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
