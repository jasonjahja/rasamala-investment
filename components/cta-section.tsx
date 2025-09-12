import Link from "next/link";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="mb-20">
      <div className="max-w-6xl mx-auto text-center bg-muted rounded-lg p-12">
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
      </div>
    </section>
  )
}