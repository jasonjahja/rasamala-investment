import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Wallet,
  Building,
  Calculator,
  Leaf,
  Briefcase,
  LineChart,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary font-serif">Services</span>
          </h1>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive investment solutions tailored to help you achieve your financial goals with the strength and
            stability of the Rasamala tree.
          </p> */}
        </section>

        {/* Main Services */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Wealth Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Personalized investment strategies designed to preserve and
                  grow your wealth across market cycles.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Portfolio construction and optimization</li>
                  <li>• Risk assessment and management</li>
                  <li>• Tax-efficient investing</li>
                  <li>• Estate planning coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Institutional Investment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Sophisticated investment solutions for institutions,
                  foundations, and corporate clients.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Pension fund management</li>
                  <li>• Endowment strategies</li>
                  <li>• Corporate treasury solutions</li>
                  <li>• Alternative investments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Advisory Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strategic financial advice and consultation for complex
                  investment decisions.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Investment committee support</li>
                  <li>• Manager selection and monitoring</li>
                  <li>• Asset allocation modeling</li>
                  <li>• Performance attribution analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investment Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Investment <span className="text-primary font-serif">Process</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Discovery</h3>
              <p className="text-sm text-muted-foreground">
                Understanding your goals, risk tolerance, and investment timeline
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Developing a customized investment strategy aligned with your objectives
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Executing your investment plan with precision and attention to detail
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Ongoing portfolio management and regular performance reviews
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Sectors Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Sectors We <span className="text-primary font-serif">Believed In</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              "/portfolio/logo1.png",
              "/portfolio/logo2.png",
              "/portfolio/logo3.png",
              "/portfolio/logo4.png",
              "/portfolio/logo5.png",
              "/portfolio/logo6.png",
              "/portfolio/logo7.png",
              "/portfolio/logo8.png",
              "/portfolio/logo9.png",
              "/portfolio/logo10.png",
            ].map((src, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Portfolio logo ${idx + 1}`}
                  width={150}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Stocks Section */}
        {/* <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Stocks <span className="text-primary">We Invested</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              "/portfolio/logo1.png",
              "/portfolio/logo2.png",
              "/portfolio/logo3.png",
              "/portfolio/logo4.png",
              "/portfolio/logo5.png",
              "/portfolio/logo6.png",
              "/portfolio/logo7.png",
              "/portfolio/logo8.png",
              "/portfolio/logo9.png",
              "/portfolio/logo10.png",
            ].map((src, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Portfolio logo ${idx + 1}`}
                  width={150}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </section> */}


        {/* CTA */}
        <section className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to <span className="text-primary font-serif">Get Started</span>?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you build a robust investment strategy that grows stronger over time, just like the roots of the
            Rasamala tree.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Schedule Your Consultation
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
