import Link from "next/link"
import { Phone, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react"
import { partners } from "@/lib/partners"

const quickLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Nos Services" },
  { href: "/galerie", label: "Galerie" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
]

const services = [
  "Formation à la Conduite",
  "Assurance Véhicules",
  "Cartes Grises",
  "Plaques d'Immatriculation",
  "Acquisition de Véhicules",
  "Services Administratifs",
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Partners strip */}
      <div className="border-b border-gray-800 bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-center text-sm text-gray-400">Nos Partenaires</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-gray-400 transition-all duration-300 grayscale hover:grayscale-0"
                style={{ 
                  '--hover-bg': partner.bgColor 
                } as React.CSSProperties}
              >
                <partner.icon className="h-4 w-4 transition-colors group-hover:text-white" />
                <span className="text-sm font-medium transition-colors group-hover:text-white">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#8B0000] bg-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 text-[#8B0000]"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white">LA PROVIDENCE</p>
                <p className="text-xs text-gray-500">Auto-École et Services</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Diligence - Efficacité - Résultat. Votre partenaire de confiance pour l'obtention de votre permis de conduire et tous vos services automobiles au Gabon.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-[#8B0000] hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-[#8B0000] hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/24176592517"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-green-600 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#8B0000]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 transition-colors hover:text-[#8B0000]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#8B0000]" />
                <span className="text-sm text-gray-400">
                  Okala Auberge, Libreville, Gabon
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#8B0000]" />
                <div className="text-sm text-gray-400">
                  <p>076 592 517</p>
                  <p>066 163 118</p>
                  <p>077 374 609</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#8B0000]" />
                <span className="text-sm text-gray-400">
                  Lundi - Samedi: 8h00 - 18h00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; 2024 La Providence Auto-École et Services — Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}
