import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function InsightsSection() {
  const insights = [
    {
      title: "Market Outlook 2024: Navigating Uncertainty",
      excerpt: "Our analysis of current market conditions and strategic positioning for the year ahead.",
      date: "December 15, 2024",
      category: "Market Analysis",
      image: "/financial-charts-and-graphs-on-computer-screen.jpg",
    },
    {
      title: "ESG Investing: Beyond the Hype",
      excerpt: "A deep dive into sustainable investing strategies that deliver both impact and returns.",
      date: "November 28, 2024",
      category: "ESG Investing",
      image: "/green-energy-wind-turbines-and-solar-panels.jpg",
    },
    {
      title: "Alternative Assets in Portfolio Construction",
      excerpt: "How alternative investments can enhance diversification and risk-adjusted returns.",
      date: "November 10, 2024",
      category: "Portfolio Strategy",
      image: "/modern-office-building-real-estate-investment.jpg",
    },
  ]

  return (
    <section id="insights" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Market Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Stay informed with our latest research, market commentary, and investment perspectives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={insight.image || "/placeholder.svg"}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-2">{insight.category}</div>
                <CardTitle className="text-xl text-card-foreground text-balance">{insight.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{insight.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{insight.date}</span>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto"
                  >
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  )
}
