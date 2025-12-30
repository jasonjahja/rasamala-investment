import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1wq38h1FMKbV5dvRmjxjfVIJxzQQm2_RbeAo0_fNlT78/edit?usp=sharing"

const EMBED_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrvXV1jDERdZyeJph1dI1f3MJr4gjbQVoWrTQQwt61tfU4HXmyo7V7lF2OXqhAgPUusC6Zr-7iZKKR/pubhtml?widget=true&headers=false"

const WEEKLY_CHART_IMG =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrvXV1jDERdZyeJph1dI1f3MJr4gjbQVoWrTQQwt61tfU4HXmyo7V7lF2OXqhAgPUusC6Zr-7iZKKR/pubchart?oid=1534272852&format=image";

const CUMULATIVE_CHART_IMG =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrvXV1jDERdZyeJph1dI1f3MJr4gjbQVoWrTQQwt61tfU4HXmyo7V7lF2OXqhAgPUusC6Zr-7iZKKR/pubchart?oid=1191968447&format=image";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-12 py-16">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary font-serif">Portfolio</span> Sheet
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This page displays the portfolio data directly from Google Sheets. Use the button to open the full sheet in a
            separate tab.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={SHEET_URL} target="_blank" rel="noreferrer">
                Open in Sheets <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href={EMBED_URL} target="_blank" rel="noreferrer">
                Open Embed View <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Embedded Sheet */}
        <section className="mb-16">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">Embedded Google Sheet</CardTitle>
              <p className="text-sm text-muted-foreground">
                If the sheet does not load, it’s usually caching or publishing propagation. Hard refresh your browser or
                add a cache-buster query param.
              </p>
            </CardHeader>

            <CardContent>
              <div className="w-full rounded-lg overflow-hidden border bg-background">
                <div className="h-[75vh] min-h-[520px]">
                  <iframe
                    title="Portfolio Google Sheet"
                    src={`${EMBED_URL}&t=${Date.now()}`}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Portfolio Performance Charts */}
        <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-foreground mb-16">
            Portfolio <span className="text-primary font-serif">Performance</span>
        </h2>

        {/* Weekly Return */}
        <Card className="border-2 mb-16">
            <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-center">
                Weekly Return Comparison
            </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-background">
                    <Image
                    src={WEEKLY_CHART_IMG}
                    alt="Weekly Return Chart"
                    fill
                    className="object-contain"
                    priority
                    unoptimized
                    />
                </div>
            </CardContent>

        </Card>

        {/* Cumulative Return */}
        <Card className="border-2">
            <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-center">
                Cumulative Return Comparison
            </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-background">
                    <Image
                    src={CUMULATIVE_CHART_IMG}
                    alt="Weekly Return Chart"
                    fill
                    className="object-contain"
                    priority
                    unoptimized
                    />
                </div>
            </CardContent>
        </Card>
        </section>

      </main>

      <Footer />
    </div>
  )
}
