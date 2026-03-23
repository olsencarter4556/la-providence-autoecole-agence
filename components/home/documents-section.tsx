import { CheckCircle, Info } from "lucide-react"

const documents = [
  "4 demi-cartes photos",
  "Copie pièce d'identité",
  "Copie carte de séjour",
  "Copie acte de naissance légalisée",
  "Certificat de résidence (non nationaux)",
]

const fees = [
  { label: "Support de cours", amount: "10 000 FCFA" },
  { label: "Frais d'examen", amount: "60 500 FCFA" },
]

export function DocumentsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Documents */}
          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="mb-6 flex items-center gap-2 font-serif text-2xl font-bold text-gray-900">
              <Info className="h-6 w-6 text-[#8B0000]" />
              Pièces à fournir
            </h3>
            <ul className="space-y-4">
              {documents.map((doc) => (
                <li key={doc} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8B0000]" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fees */}
          <div className="rounded-2xl bg-[#8B0000] p-8 text-white">
            <h3 className="mb-6 font-serif text-2xl font-bold">
              Frais supplémentaires
            </h3>
            <div className="space-y-4">
              {fees.map((fee) => (
                <div
                  key={fee.label}
                  className="flex items-center justify-between rounded-lg bg-white/10 px-6 py-4"
                >
                  <span className="font-medium">{fee.label}</span>
                  <span className="text-xl font-bold">{fee.amount}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/80">
              Ces frais sont en supplément des tarifs de formation et sont obligatoires pour passer l'examen officiel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
