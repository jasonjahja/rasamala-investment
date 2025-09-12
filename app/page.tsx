import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ApproachSection } from "@/components/approach-section"
import { CTASection } from "@/components/cta-section"
// import { InsightsSection } from "@/components/insights-section"
import { Footer } from "@/components/footer"
import { PortfolioSectorsSection } from "@/components/sectors-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <PortfolioSectorsSection />
        <CTASection />
        {/* <InsightsSection /> */}
      </main>
      <Footer />
    </div>
  )
}
