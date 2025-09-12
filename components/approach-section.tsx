import { TrendingUp, Users, Award } from "lucide-react"
import Image from "next/image"

export function ApproachSection() {
  return (
    <section id="approach" className="py-20 bg-muted">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Text Section - takes 2/3 width */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Investment <span className="text-primary font-serif">Approach</span></h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Inspired by the Rasamala tree's deep roots and towering strength, our investment philosophy focuses on
              building diversified portfolios that can weather any storm while reaching new heights.
            </p>
            <div className="space-y-8">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Research-Driven Decisions</h4>
                  <p className="text-sm text-muted-foreground">
                    Every investment backed by thorough market analysis and risk assessment.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Personalized Strategies</h4>
                  <p className="text-sm text-muted-foreground">
                    Tailored investment plans that align with your unique goals and risk tolerance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Proven Track Record</h4>
                  <p className="text-sm text-muted-foreground">
                    13 years of consistent performance and client satisfaction in emerging markets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - takes 1/3 width */}
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/rasamala-logo-2.png"
              alt="Rasamala Investment Philosophy"
              width={280}
              height={280}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
