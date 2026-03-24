/**
 * Chemins vers les fichiers dans /public.
 * encodeURIComponent gère espaces et caractères accentués dans les noms de fichiers.
 */
function publicFile(name: string): string {
  return `/${encodeURIComponent(name)}`
}

export const publicImages = {
  autoEcole: "/auto-ecole-ordinaire.jpg",
  logo: "/la-providence-logo.jpeg",
  formationConduite: publicFile("formation conduite-.jpg"),
  assuranceVehicules: publicFile("assurance-pour-vehicules-dentreprises-ce-quil-faut-savoir.jpeg"),
  carteGrise: publicFile("carte grise-1.jpg"),
  plaquesImmatriculation: publicFile("Plaques d'immatriculation.jpg"),
  acquisitionVehicules: publicFile("acquisition voiture1.jpg"),
  coursProjete: publicFile("cours projecté-theorique-1024x880.jpg"),
  salleClimatisee: publicFile("salle climatisées-2093744_1280.jpg"),
  coursAnglais: publicFile("cours anglais.jpg"),
  suiviPersonnalise: publicFile("suivi personnalié-1024x681.jpg"),
  suzukiBaleno: publicFile("Suzuki Baleno.jpg"),
  hyundaiI30: publicFile("Hyundai i30.jpg"),
  mitsubishiL200: publicFile("Mitsubishi L200.jpg"),
  toyotaHiAce: publicFile("Toyota HiAce.png"),
  toyotaCoaster: publicFile("Toyota Coasterr.png"),
} as const
