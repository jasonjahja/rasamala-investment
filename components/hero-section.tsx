import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-muted to-background"
    >
      <div className="absolute inset-0 bg-[url('/modern-financial-district-skyline-at-sunset.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance font-serif">
          Grow Your Wealth with <span className="text-primary noto-serif">Rasamala</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
          Partner with us for tailored investment strategies that deliver exceptional returns and secure your financial
          future
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
              Start Investing Today
            </Button>
          </Link>
          <Link href="/about">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
