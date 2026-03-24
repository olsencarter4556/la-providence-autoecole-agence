"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { publicImages } from "@/lib/public-images"

const vehicles = [
  {
    name: "Suzuki Baleno",
    category: "Berline légère",
    permit: "Permis B",
    image: publicImages.suzukiBaleno,
  },
  {
    name: "Hyundai i30",
    category: "Berline compacte",
    permit: "Permis B",
    image: publicImages.hyundaiI30,
  },
  {
    name: "Mitsubishi L200",
    category: "Pick-up 4x4",
    permit: "Permis B/C",
    image: publicImages.mitsubishiL200,
  },
  {
    name: "Toyota HiAce",
    category: "Minibus",
    permit: "Permis D",
    image: publicImages.toyotaHiAce,
  },
  {
    name: "Toyota Coaster",
    category: "Grand Bus",
    permit: "Permis D/E",
    image: publicImages.toyotaCoaster,
  },
]

export function FleetSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Notre Flotte de Véhicules
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 bg-[#8B0000]" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Des véhicules modernes et entretenus pour votre formation
          </p>
        </div>

        {/* Desktop Grid / Mobile Scroll */}
        <div className="relative">
          {/* Mobile scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100 md:hidden sm:flex"
            aria-label="Précédent"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100 md:hidden sm:flex"
            aria-label="Suivant"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-x-visible"
          >
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="group flex-shrink-0 w-[280px] md:w-auto overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg hover:scale-[1.02] hover:border-b-4 hover:border-[#8B0000]"
              >
                {/* Vehicle Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#8B0000]">{vehicle.name}</h3>
                  <p className="text-sm text-gray-500">{vehicle.category}</p>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <span className="rounded-full bg-[#8B0000] px-3 py-1 text-xs font-semibold text-white">
                      {vehicle.permit}
                    </span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      Disponible pour formation
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
