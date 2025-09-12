"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Rasamala has transformed our investment approach. Their strategic guidance helped us achieve a 40% increase in portfolio value over three years.",
      author: "Robert Chen",
      title: "CEO, TechVentures Inc.",
      company: "Technology Sector",
    },
    {
      quote:
        "The team's expertise in alternative investments opened doors we never knew existed. Our diversified portfolio now generates consistent returns regardless of market conditions.",
      author: "Maria Gonzalez",
      title: "CFO, Healthcare Innovations",
      company: "Healthcare Sector",
    },
    {
      quote:
        "Professional, transparent, and results-driven. Rasamala doesn't just manage our wealth—they help us build generational prosperity.",
      author: "David Thompson",
      title: "Family Office Principal",
      company: "Private Wealth",
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hear from our clients about their experience working with Rasamala
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-12 text-center">
              <div className="text-4xl text-primary mb-6">"</div>
              <blockquote className="text-2xl text-card-foreground mb-8 text-balance leading-relaxed">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              <div className="space-y-2">
                <div className="font-semibold text-lg text-card-foreground">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-primary font-medium">{testimonials[currentTestimonial].title}</div>
                <div className="text-muted-foreground">{testimonials[currentTestimonial].company}</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
