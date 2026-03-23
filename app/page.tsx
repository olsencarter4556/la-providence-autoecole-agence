import { HeroSection } from "@/components/home/hero-section"
import { WelcomeSection } from "@/components/home/welcome-section"
import { ServicesHighlight } from "@/components/home/services-highlight"
import { PricingSection } from "@/components/home/pricing-section"
import { FleetSection } from "@/components/home/fleet-section"
import { AdvantagesSection } from "@/components/home/advantages-section"
import { DocumentsSection } from "@/components/home/documents-section"
import { PartnersStrip } from "@/components/home/partners-strip"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServicesHighlight />
      <PricingSection />
      <FleetSection />
      <AdvantagesSection />
      <DocumentsSection />
      <PartnersStrip />
    </>
  )
}
