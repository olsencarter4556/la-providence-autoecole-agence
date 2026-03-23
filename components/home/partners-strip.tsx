"use client"

import { partners } from "@/lib/partners"

export function PartnersStrip() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center font-serif text-2xl font-bold text-[#8B0000] md:text-3xl">
          Ils nous font confiance — Nos Partenaires Officiels
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 bg-[#8B0000]" />
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-4"
            >
              <div
                className="flex items-center gap-3 rounded-full px-6 py-3 text-white shadow-md transition-transform hover:scale-105"
                style={{ backgroundColor: partner.bgColor }}
              >
                <partner.icon className="h-6 w-6" />
                <div>
                  <p className="font-bold">{partner.name}</p>
                  <p className="text-xs italic opacity-90">Partenaire Officiel</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
