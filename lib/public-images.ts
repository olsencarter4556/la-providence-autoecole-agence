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
  coursProjete: publicFile("cours projecté-theorique-1024x880.jpg"),
  salleClimatisee: publicFile("salle climatisées-2093744_1280.jpg"),
  coursAnglais: publicFile("cours anglais.jpg"),
  suiviPersonnalise: publicFile("suivi personnalié-1024x681.jpg"),
} as const
