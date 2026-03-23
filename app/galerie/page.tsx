"use client"

import { useState } from "react"
import { PageHero } from "@/components/shared/page-hero"
import { X } from "lucide-react"

const categories = ["Tous", "Formations", "Véhicules", "Activités"]

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1449965408869-ebd3fee56ce2?q=80&w=800",
    category: "Formations",
    title: "Session de formation théorique",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800",
    category: "Véhicules",
    title: "Notre flotte de véhicules",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800",
    category: "Véhicules",
    title: "Véhicule d'apprentissage",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800",
    category: "Véhicules",
    title: "Formation pratique",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800",
    category: "Activités",
    title: "Journée portes ouvertes",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=800",
    category: "Formations",
    title: "Cours de conduite",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
    category: "Véhicules",
    title: "Entretien des véhicules",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=800",
    category: "Activités",
    title: "Remise des permis",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800",
    category: "Formations",
    title: "Examen pratique",
  },
]

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [lightboxImage, setLightboxImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems =
    activeCategory === "Tous"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <PageHero
        title="Galerie"
        subtitle="Découvrez nos activités et formations en images"
        backgroundImage="https://images.unsplash.com/photo-1449965408869-ebd3fee56ce2?q=80&w=2070"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[#8B0000] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative mb-6 cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
                onClick={() => setLightboxImage(item)}
              >
                <div
                  className="aspect-[4/3] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.src}')` }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#8B0000]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                    {item.category}
                  </span>
                  <p className="mt-2 text-center text-lg font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message */}
          <div className="mt-12 rounded-xl bg-gray-50 p-8 text-center">
            <p className="text-gray-600">
              Notre galerie sera mise à jour régulièrement avec nos activités et formations.
              Suivez-nous sur les réseaux sociaux pour ne rien manquer !
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-h-[80vh] max-w-4xl overflow-hidden rounded-xl">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
              {lightboxImage.category}
            </span>
            <p className="mt-2 text-lg font-semibold">{lightboxImage.title}</p>
          </div>
        </div>
      )}
    </>
  )
}
