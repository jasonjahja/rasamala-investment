import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Scale, Leaf } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-12 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary font-serif">Rasamala</span>
          </h1>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Like the mighty Rasamala tree that grows deep roots and reaches great heights, we build lasting wealth
            through principled investment strategies and unwavering commitment to our clients.
          </p> */}
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 ">Our <span className="text-primary font-serif">Story</span></h2>
              <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
                The name Rasamala is inspired by the Rasamala tree (Altingia excelsa), a rare and 
                valuable tree native to West Java. Known for its strength, durability, and fragrant 
                aroma, the tree symbolizes the foundation of our investment philosophy. Its strength 
                reflects our commitment to building resilient strategies that can withstand market 
                fluctuations. Its value mirrors our goal of creating investments that grow in worth 
                over time. Its uniqueness symbolizes our dedication to offering distinctive 
                opportunities, and its natural fragrance embodies the prosperity we aim to spread 
                through profitable and impactful returns.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Just as the Rasamala tree enriches its 
                surroundings, Rasamala Investment seeks to enrich lives and communities through 
                sustainable and meaningful investments. Our philosophy is to design strategies that 
                are resilient, accountable, and sustainable—bringing long-term benefits not only to 
                our clients but also to society and the environment.
              </p>
            </div>

            {/* Right: Logo Image */}
            <div className="flex justify-center">
              <Image
                src="/rasamala-logo-2.png"
                alt="Rasamala Logo"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Company Background (Full Width White Section) */}
      <section className="bg-white mb-16">
        <div className="container mx-auto px-12">
          {/* Company Background Text */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Company <span className="text-primary font-serif">Background</span></h2>
            <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
              Rasamala Investment was founded in 2025 in West Java by five bachelor students at Institut Teknologi Bandung (ITB) who shared a common vision to redefine the role of investment in society. The company was established in response to the growing need for financial institutions that balance profitability with responsibility, addressing both economic and social challenges.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
              In its early development, Rasamala Investment focused on supporting small and medium-sized enterprises (SMEs) in Indonesia, particularly those engaged in sustainable industries such as renewable energy, responsible consumer goods, and technology for social impact. This initial focus reflected the founders’ belief that investment should serve as a catalyst for inclusive growth while preparing businesses to compete on a global scale.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
              From the outset, Rasamala Investment has been guided by the values of resilience, accountability, and sustainability. These principles shape its approach to designing investment strategies that create financial returns while fostering long-term stability. The company has also established research initiatives and partnerships with academic institutions to strengthen its analytical capabilities and ensure that its strategies are data-driven and forward-looking.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
              Looking ahead, Rasamala Investment is committed to becoming a trusted partner for clients, driving inclusive prosperity, and positioning itself as a competitive player in both local and international markets. With its strong academic roots, socially driven mission, and focus on innovation, the company aspires to grow into a leading investment firm in Southeast Asia, recognized for both performance and positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Vision */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our <span className="text-primary font-serif">Vision</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted investment partner in emerging markets, 
                empowering individuals and institutions to achieve sustainable 
                financial growth and long-term prosperity.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our <span className="text-primary font-serif">Mission</span></h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed">
                <li>Deliver diversified and high-quality portfolios that generate consistent, long-term returns.</li>
                <li>Apply innovation and research-driven strategies while maintaining transparency and accountability.</li>
                <li>Build enduring relationships with clients based on trust and shared growth.</li>
                <li>Contribute positively to society and the environment through responsible investment practices.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$2.5B+</div>
              <div className="text-muted-foreground">Assets Under Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">13</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section> */}


      <main className="container mx-auto px-12 py-16">
        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our <span className="text-primary font-serif">Core Values</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary" /> {/* Resilience Icon */}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Resilience</h3>
                <p className="text-muted-foreground">
                  We are committed to building investment strategies that remain strong and reliable through changing
                  market conditions, ensuring stability and confidence for our clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-primary" /> {/* Accountability Icon */}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Accountability</h3>
                <p className="text-muted-foreground">
                  Transparency and responsibility guide every decision we make, as we uphold the highest standards of ethics
                  and governance to protect our clients’ trust.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" /> {/* Sustainability Icon */}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We prioritize long-term growth that balances profitability with environmental and social responsibility,
                  creating value that endures for generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Leadership */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Leadership <span className="text-primary font-serif">Team</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center flex flex-col h-full">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/adi.png"
                    alt="Adi Ahmad Hidayat"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Adi Ahmad Hidayat</h3>
                <p className="text-primary font-medium mb-2">Financial Analyst</p>
                <p className="text-sm text-muted-foreground text-justify py-2 mb-4">A financial analyst with a solid background in finance and data, and a CFA holder. He has expertise in the capital market with a focus on Financials, Property & Real Estate, and Energy sectors, supported by strong analytical skills in evaluating investment opportunities and market dynamics.</p>

                {/* Sector Specialization */}
                <div className="text-left mt-auto">
                  <p className="font-medium text-foreground mb-2">Sector Specialization:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Financials</li>
                    <li>Property & Real Estate</li>
                    <li>Energy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center flex flex-col h-full">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/darryl.png"
                    alt="Darryl Sandrina Faisal Putri"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Darryl Sandrina Faisal Putri</h3>
                <p className="text-primary font-medium mb-2">Financial Analyst</p>
                <p className="text-sm text-muted-foreground text-justify py-2 mb-4">A financial analyst with a strong academic background, holding a bachelor’s degree from SBM ITB and a master’s degree from Harvard Business School. Over the past five years, she has developed expertise in the capital market, focusing on Digital Telecommunications and Consumer Goods & Retail.</p>

                {/* Sector Specialization */}
                <div className="text-left mt-auto">
                  <p className="font-medium text-foreground mb-2">Sector Specialization:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Technology</li>
                    <li>Financials</li>
                    <li>Basic Materials</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center flex flex-col h-full">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/eldina.png"
                    alt="Dara Eldina Hutajulu"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Dara Eldina Hutajulu</h3>
                <p className="text-primary font-medium mb-2">Financial Analyst</p>
                <p className="text-sm text-muted-foreground text-justify py-2 mb-4">A financial analyst at Rasamala Investment with a management background from SBM ITB. She focuses on Financials, Technology, and Property & Real Estate sectors, with expertise in identifying growth opportunities and evaluating long-term value creation to deliver strategic investment insights.</p>

                {/* Sector Specialization */}
                <div className="text-left mt-auto">
                  <p className="font-medium text-foreground mb-2">Sector Specialization:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Financials</li>
                    <li>Technology</li>
                    <li>Properties & Real Estate</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center flex flex-col h-full">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/jason.png"
                    alt="Jason Jahja"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Jason Jahja</h3>
                <p className="text-primary font-medium mb-2">Financial Analyst</p>
                <p className="text-sm text-muted-foreground text-justify py-2 mb-4">A financial analyst with a bachelor’s degree from STEI ITB. Over the past three years, he has concentrated on analyzing Raw Materials, Industrials, and Technology sectors, developing a deep understanding of market trends and investment opportunities in these industries.</p>

                {/* Sector Specialization */}
                <div className="text-left mt-auto">
                  <p className="font-medium text-foreground mb-2">Sector Specialization:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Basic Materials</li>
                    <li>Industrials</li>
                    <li>Technology</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center flex flex-col h-full">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/rio.png"
                    alt="Rio Rizky Ramadhan"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Rio Rizky Ramadhan</h3>
                <p className="text-primary font-medium mb-2">Financial Analyst</p>
                <p className="text-sm text-muted-foreground text-justify py-2 mb-4">A financial analyst at Rasamala Investment specializing in Technology, Energy, and Transportation & Logistics sectors. Previously, he spent two years at Evercore advising UK and European clients on mergers, acquisitions, and corporate finance matters.</p>

                {/* Sector Specialization */}
                <div className="text-left mt-auto">
                  <p className="font-medium text-foreground mb-2">Sector Specialization:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Technology</li>
                    <li>Energy</li>
                    <li>Transportation & Logistics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Grow Your Wealth?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of clients who trust Rasamala to nurture their financial future with the same care we give to
            growing strong roots.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Schedule a Consultation
          </Button>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}
