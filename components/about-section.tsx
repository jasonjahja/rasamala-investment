import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Scale, Leaf, TrendingUp, Users, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose <span className="text-primary font-serif">Rasamala</span>?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our investment philosophy is rooted in the strength and resilience of the Rasamala tree, ensuring your
              financial growth is both sustainable and enduring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Resilient Strategies</h3>
                <p className="text-muted-foreground">
                  Investment approaches that withstand market volatility and deliver consistent returns through changing
                  economic conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Transparent Approach</h3>
                <p className="text-muted-foreground">
                  Complete transparency in our processes, fees, and performance reporting. You'll always know where your
                  money is and how it's performing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sustainable Growth</h3>
                <p className="text-muted-foreground">
                  Long-term wealth building that considers environmental and social impact, creating value that benefits
                  both you and future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
  )
}
