import { PageHero } from "@/components/shared/page-hero"
import Link from "next/link"
import { 
  Car, Shield, FileText, CreditCard, ShoppingCart, ClipboardList, Settings,
  Check, ChevronRight, Projector, Snowflake, Languages, Clock, FileCheck, CircleDot
} from "lucide-react"

const formations = [
  { name: "Formation Normale", duration: "2 mois", price: "120 000 FCFA" },
  { name: "Formation Accélérée", duration: "1 mois", price: "150 000 FCFA" },
  { name: "Formation Express", duration: "3 semaines", price: "180 000 FCFA" },
  { name: "Perfectionnement (1 semaine)", duration: "1 semaine", price: "30 000 FCFA" },
  { name: "Perfectionnement (2 semaines)", duration: "2 semaines", price: "60 000 FCFA" },
]

const carteGriseSteps = [
  "Dépôt du dossier complet",
  "Vérification des documents",
  "Paiement des frais",
  "Traitement de la demande",
  "Retrait de la carte grise",
]

const carteGriseDocs = [
  "Ancienne carte grise",
  "Pièce d'identité du propriétaire",
  "Certificat de vente (si achat)",
  "Attestation d'assurance",
  "Certificat de contrôle technique",
]

const vehicles = [
  { name: "Véhicule Citadin", type: "Occasion", price: "Sur demande" },
  { name: "Berline Familiale", type: "Occasion", price: "Sur demande" },
  { name: "SUV / 4x4", type: "Importation", price: "Sur demande" },
]

const fleetVehicles = [
  {
    name: "Suzuki Baleno",
    category: "Berline légère",
    permit: "Permis B",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600",
  },
  {
    name: "Hyundai i30",
    category: "Berline compacte",
    permit: "Permis B",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600",
  },
  {
    name: "Mitsubishi L200",
    category: "Pick-up 4x4",
    permit: "Permis B/C",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  },
  {
    name: "Toyota HiAce",
    category: "Minibus",
    permit: "Permis D",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600",
  },
  {
    name: "Toyota Coaster",
    category: "Grand Bus",
    permit: "Permis D/E",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Nos Services"
        subtitle="Une gamme complète de services automobiles pour répondre à tous vos besoins"
        backgroundImage="https://images.unsplash.com/photo-1449965408869-ebd3fee56ce2?q=80&w=2070"
      />

      {/* Navigation des services */}
      <section className="sticky top-20 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
            {[
              { href: "#conduite", label: "Formation Conduite", icon: Car },
              { href: "#assurance", label: "Assurance", icon: Shield },
              { href: "#cartes-grises", label: "Cartes Grises", icon: FileText },
              { href: "#plaques", label: "Plaques", icon: CreditCard },
              { href: "#vehicules", label: "Véhicules", icon: ShoppingCart },
              { href: "#automatique", label: "Boîte Auto", icon: Settings },
              { href: "#administratif", label: "Administratif", icon: ClipboardList },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex flex-shrink-0 items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[#8B0000] hover:bg-[#8B0000] hover:text-white"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Formation à la Conduite */}
      <section id="conduite" className="scroll-mt-36 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8B0000] text-white">
              <Car className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Formation à la Conduite
              </h2>
              <p className="text-gray-600">Permis A, B, C, D, E, F, G</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Tableau des formations */}
            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">
                Nos formules de formation
              </h3>
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <table className="w-full">
                  <thead className="bg-[#8B0000] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Formation</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Durée</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Tarif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {formations.map((f) => (
                      <tr key={f.name} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{f.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{f.duration}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-[#8B0000]">{f.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Caractéristiques */}
            <div className="space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Ce qui nous distingue
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Projector, label: "Cours théoriques projetés en salle" },
                    { icon: Snowflake, label: "Salle de cours climatisée" },
                    { icon: Languages, label: "Cours dispensés en Anglais pour Anglophones" },
                    { icon: Car, label: "Cours pratiques encadrés et progressifs" },
                    { icon: Clock, label: "Suivi personnalisé après examen" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#8B0000]/10 text-[#8B0000]">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B0000] py-4 font-semibold text-white transition-colors hover:bg-[#6B0000]"
              >
                S'inscrire maintenant
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Assurance Véhicules */}
      <section id="assurance" className="scroll-mt-36 bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8B0000] text-white">
              <Shield className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Assurance Véhicules
              </h2>
              <p className="text-gray-600">Protection complète pour votre véhicule</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Assurance Responsabilité Civile",
                description: "Couverture obligatoire pour tous les véhicules circulant au Gabon.",
              },
              {
                title: "Assurance Tous Risques",
                description: "Protection complète contre tous types de dommages et sinistres.",
              },
              {
                title: "Assurance Temporaire",
                description: "Solutions flexibles pour des besoins ponctuels ou de courte durée.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <Shield className="mb-4 h-8 w-8 text-[#8B0000]" />
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-[#8B0000] p-8 text-center text-white">
            <p className="mb-4 text-lg">
              Nous vous accompagnons dans toutes vos démarches d'assurance automobile
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#8B0000] transition-colors hover:bg-gray-100"
            >
              Demander un devis
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Cartes Grises */}
      <section id="cartes-grises" className="scroll-mt-36 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8B0000] text-white">
              <FileText className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Établissement des Cartes Grises
              </h2>
              <p className="text-gray-600">Service rapide et fiable</p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Stepper */}
            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">
                Procédure étape par étape
              </h3>
              <div className="space-y-4">
                {carteGriseSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#8B0000] text-white font-semibold">
                      {index + 1}
                    </div>
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-white p-4 border border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Délai de traitement :</strong> 5 à 10 jours ouvrables selon la complexité du dossier
                </p>
              </div>
            </div>

            {/* Documents */}
            <div className="rounded-xl bg-white border border-gray-200 p-6">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">
                Documents nécessaires
              </h3>
              <ul className="space-y-3">
                {carteGriseDocs.map((doc) => (
                  <li key={doc} className="flex items-center gap-3">
                    <FileCheck className="h-5 w-5 flex-shrink-0 text-[#8B0000]" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B0000] py-3 font-semibold text-white transition-colors hover:bg-[#6B0000]"
              >
                Démarrer la procédure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Plaques d'Immatriculation */}
      <section id="plaques" className="scroll-mt-36 bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8B0000] text-white">
              <CreditCard className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Plaques d'Immatriculation Personnalisées
              </h2>
              <p className="text-gray-600">Fabrication sur mesure</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Plaques Standard", description: "Plaques classiques conformes à la réglementation" },
              { title: "Plaques Personnalisées", description: "Numéros personnalisés selon disponibilité" },
              { title: "Plaques de Remplacement", description: "Renouvellement de plaques endommagées" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <CreditCard className="mx-auto mb-4 h-10 w-10 text-[#8B0000]" />
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-white p-6 text-center">
            <p className="text-gray-600">
              <strong>Délai de fabrication :</strong> 3 à 7 jours ouvrables
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#8B0000] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#6B0000]"
            >
              Demander un devis
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Acquisition de Véhicules */}
      <section id="vehicules" className="scroll-mt-36 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8B0000] text-white">
              <ShoppingCart className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Acquisition de Véhicules
              </h2>
              <p className="text-gray-600">Achat, vente, importation et location</p>
            </div>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: CircleDot, label: "Recherche nationale", desc: "Trouvez votre véhicule au Gabon" },
              { icon: CircleDot, label: "Importation", desc: "Import depuis l'étranger" },
              { icon: CircleDot, label: "Vente", desc: "Mise en vente de véhicules" },
              { icon: CircleDot, label: "Location", desc: "Solutions de location" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-gray-200 bg-white p-4 text-center">
                <item.icon className="mx-auto mb-2 h-6 w-6 text-[#8B0000]" />
                <h4 className="font-semibold text-gray-900">{item.label}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Fleet Section */}
          <div className="mb-12 rounded-xl bg-gray-50 p-8">
            <h3 className="mb-2 text-center text-xl font-semibold text-gray-900">
              Notre Flotte de Véhicules
            </h3>
            <div className="mx-auto mb-6 h-1 w-16 bg-[#8B0000]" />
            <p className="mb-8 text-center text-gray-600">
              Des véhicules modernes et entretenus pour votre formation
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {fleetVehicles.map((vehicle) => (
                <div
                  key={vehicle.name}
                  className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg hover:scale-[1.02] hover:border-b-4 hover:border-[#8B0000]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url('${vehicle.image}')` }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-[#8B0000]">{vehicle.name}</h4>
                    <p className="text-sm text-gray-500">{vehicle.category}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#8B0000] px-3 py-1 text-xs font-semibold text-white">
                        {vehicle.permit}
                      </span>
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                        Disponible
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Catalogue */}
          <h3 className="mb-6 text-xl font-semibold text-gray-900">Autres véhicules disponibles</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] bg-gray-200">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070')`,
                    }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium uppercase text-[#8B0000]">{vehicle.type}</p>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">{vehicle.name}</h4>
                  <p className="text-sm font-medium text-gray-600">{vehicle.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Assistance Boîte Automatique */}
      <section id="automatique" className="scroll-mt-36 bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8B0000] text-white">
              <Settings className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Assistance Conducteurs (Boîte Automatique)
              </h2>
              <p className="text-gray-600">Formation complémentaire et recyclage</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Formation Complémentaire",
                description: "Pour conducteurs déjà titulaires d'un permis souhaitant maîtriser les véhicules automatiques.",
              },
              {
                title: "Remise à Niveau",
                description: "Cours pratiques pour reprendre confiance sur véhicules à boîte automatique.",
              },
              {
                title: "Recyclage Théorique",
                description: "Révision complète du code de la route pour conducteurs expérimentés.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <Check className="mb-4 h-8 w-8 text-[#8B0000]" />
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Services Administratifs */}
      <section id="administratif" className="scroll-mt-36 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#8B0000] text-white">
              <ClipboardList className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Services Administratifs
              </h2>
              <p className="text-gray-600">Accompagnement complet dans vos démarches</p>
            </div>
          </div>

          <div className="rounded-xl bg-[#8B0000] p-8 text-white">
            <p className="mb-6 text-lg leading-relaxed">
              Nous vous accompagnons dans toutes vos démarches administratives liées à l'automobile :
              constitution de dossiers, suivi des procédures, récupération de documents officiels,
              et tout autre besoin administratif.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                "Dossiers de permis",
                "Mutations",
                "Duplicata",
                "Attestations",
                "Procurations",
              ].map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#8B0000] transition-colors hover:bg-gray-100"
            >
              Nous contacter
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
