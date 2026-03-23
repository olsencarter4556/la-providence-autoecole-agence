interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[300px] bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage
            ? `linear-gradient(to right, rgba(139, 0, 0, 0.9), rgba(139, 0, 0, 0.7)), url('${backgroundImage}')`
            : `linear-gradient(to right, rgba(139, 0, 0, 1), rgba(139, 0, 0, 0.9))`,
        }}
      />
      <div className="relative container mx-auto flex min-h-[300px] flex-col items-center justify-center px-4 py-16 text-center text-white">
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="max-w-2xl text-lg text-white/90">{subtitle}</p>}
      </div>
    </section>
  )
}
