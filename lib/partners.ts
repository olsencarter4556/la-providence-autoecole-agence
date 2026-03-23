import { Leaf, Shield, Star, Building2, Medal, Truck, Briefcase } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Partner {
  id: number
  name: string
  bgColor: string
  icon: LucideIcon
  description: string
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "Melen",
    bgColor: "#2E7D32",
    icon: Leaf,
    description: "Partenaire agro/nature",
  },
  {
    id: 2,
    name: "Carassa",
    bgColor: "#1565C0",
    icon: Shield,
    description: "Assurances & services",
  },
  {
    id: 3,
    name: "Partenaire 3",
    bgColor: "#AD1457",
    icon: Star,
    description: "Services spécialisés",
  },
  {
    id: 4,
    name: "Partenaire 4",
    bgColor: "#4527A0",
    icon: Building2,
    description: "Services professionnels",
  },
  {
    id: 5,
    name: "Partenaire 5",
    bgColor: "#F57F17",
    icon: Medal,
    description: "Partenaire institutionnel",
  },
  {
    id: 6,
    name: "Partenaire 6",
    bgColor: "#00695C",
    icon: Truck,
    description: "Logistique & transport",
  },
  {
    id: 7,
    name: "Partenaire 7",
    bgColor: "#37474F",
    icon: Briefcase,
    description: "Services corporate",
  },
]
