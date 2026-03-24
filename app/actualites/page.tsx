import { PageHero } from "@/components/shared/page-hero"
import Link from "next/link"
import { Calendar, ArrowRight, Tag, MessageCircle, Facebook } from "lucide-react"
import { whatsappChatUrl } from "@/lib/whatsapp"

const news = [
  {
    id: 1,
    title: "Promotion spéciale Formation Accélérée",
    excerpt:
      "Profitez de notre offre exceptionnelle sur la formation accélérée d'un mois. Inscrivez-vous avant la fin du mois pour bénéficier d'une réduction de 10%.",
    date: "15 Mars 2024",
    category: "Promotion",
    image: "https://images.unsplash.com/photo-1449965408869-ebd3fee56ce2?q=80&w=800",
  },
  {
    id: 2,
    title: "Infos examens permis — Session 2025",
    excerpt:
      "Les dates des prochaines sessions d'examens du permis de conduire sont maintenant disponibles. Consultez le calendrier et préparez-vous dès maintenant.",
    date: "10 Mars 2024",
    category: "Information",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800",
  },
  {
    id: 3,
    title: "Bienvenue à nos nouveaux élèves",
    excerpt:
      "La Providence Auto-École accueille sa nouvelle promotion d'élèves. Nous leur souhaitons plein succès dans leur parcours vers l'obtention du permis.",
    date: "5 Mars 2024",
    category: "Actualité",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800",
  },
]

export default function ActualitesPage() {
  return (
    <>
      <PageHero
        title="Actualités & Promotions"
        subtitle="Restez informé de nos dernières nouvelles et offres spéciales"
        backgroundImage="https://images.unsplash.com/photo-1449965408869-ebd3fee56ce2?q=80&w=2070"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Promotions banner */}
          <div className="mb-12 rounded-xl bg-[#8B0000] p-8 text-center text-white">
            <Tag className="mx-auto mb-4 h-10 w-10" />
            <h2 className="mb-2 text-2xl font-bold">Offres Spéciales en Cours</h2>
            <p className="mb-4 text-white/90">
              Renseignez-vous sur nos offres spéciales en cours ! Contactez-nous pour plus de détails.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#8B0000] transition-colors hover:bg-gray-100"
            >
              Nous contacter
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* News grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="rounded-full bg-[#8B0000]/10 px-3 py-1 text-xs font-medium text-[#8B0000]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-[#8B0000]">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-semibold text-[#8B0000] transition-colors hover:text-[#6B0000]">
                    Lire la suite
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Social CTA */}
          <div className="mt-16 rounded-xl bg-gray-50 p-8 text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Suivez-nous pour ne rien manquer !
            </h3>
            <p className="mb-6 text-gray-600">
              Restez connecté sur nos réseaux sociaux pour être informé de nos actualités et promotions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
