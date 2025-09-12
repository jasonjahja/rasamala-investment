import Image from "next/image"

export function PortfolioSectorsSection() {
  return (
    <section id="sectors" className="py-16">
      <div className="container mx-auto px-4">
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
      </div>
    </section>
  )
}
