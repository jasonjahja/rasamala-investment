import { Banknote, Building2, Fuel, Cpu, Boxes, Factory, Truck } from "lucide-react"
import Image from "next/image"

const sectors = [
  { name: "Financials", icon: Banknote },
  { name: "Property & Real Estate", icon: Building2 },
  { name: "Energy", icon: Fuel },
  { name: "Technology", icon: Cpu },
  { name: "Basic Materials", icon: Boxes },
  { name: "Industrials", icon: Factory },
  { name: "Transportation & Logistics", icon: Truck },
]

export function PortfolioSectorsSection() {
  return (
    <section className="py-16 mb-16">
      <h2 className="text-3xl font-bold text-center text-foreground mb-12">
        Sectors We <span className="text-primary font-serif">Believed In</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {sectors.map(({ name, icon: Icon }, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center text-center">
            <Icon className="w-16 h-16 text-primary mb-4 transition-transform hover:scale-110" />
            <p className="text-sm font-medium text-foreground">{name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
