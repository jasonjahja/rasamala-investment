import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Market <span className="text-primary">Insights</span>
          </h1>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with our latest market analysis, investment perspectives, and economic outlook from the
            Rasamala research team.
          </p> */}
        </section>

        {/* Featured Insight */}
        <section className="mb-16">
          <Card className="border-2 border-primary/20">
            <CardContent className="px-8">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="text-sm text-muted-foreground">December 9, 2024</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2025 Market Outlook: Navigating Uncertainty with Steady Growth
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As we approach 2025, global markets face a complex landscape of opportunities and challenges. Our
                research team analyzes key trends including central bank policies, geopolitical developments, and
                emerging market dynamics that will shape investment strategies in the coming year.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Read Full Report</Button>
            </CardContent>
          </Card>
        </section>

        {/* Recent Insights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Recent Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Market Analysis</span>
                  <span className="text-sm text-muted-foreground">Dec 5, 2024</span>
                </div>
                <CardTitle className="text-lg">Tech Sector Resilience in Volatile Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Examining how technology companies have maintained growth momentum despite market headwinds and what
                  this means for portfolio allocation strategies.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">ESG Focus</span>
                  <span className="text-sm text-muted-foreground">Dec 2, 2024</span>
                </div>
                <CardTitle className="text-lg">Sustainable Investing: Beyond the Hype</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  A deep dive into ESG investment performance metrics and how sustainable strategies are delivering both
                  impact and returns for long-term investors.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Economic Outlook</span>
                  <span className="text-sm text-muted-foreground">Nov 28, 2024</span>
                </div>
                <CardTitle className="text-lg">Emerging Markets: The Next Growth Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Analyzing demographic trends, infrastructure development, and policy reforms driving growth
                  opportunities in emerging market economies.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Portfolio Strategy</span>
                  <span className="text-sm text-muted-foreground">Nov 25, 2024</span>
                </div>
                <CardTitle className="text-lg">Diversification in the Digital Age</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  How traditional diversification principles are evolving with digital assets, alternative investments,
                  and new correlation patterns in global markets.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Risk Management</span>
                  <span className="text-sm text-muted-foreground">Nov 22, 2024</span>
                </div>
                <CardTitle className="text-lg">Inflation Hedging Strategies for 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Practical approaches to protecting purchasing power through strategic asset allocation and
                  inflation-resistant investment vehicles.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Market Trends</span>
                  <span className="text-sm text-muted-foreground">Nov 18, 2024</span>
                </div>
                <CardTitle className="text-lg">The Rise of Private Credit Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Understanding the growth of private credit as an asset class and its role in institutional and
                  high-net-worth investment portfolios.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Market Data */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Market Indicators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">S&P 500</h3>
                <div className="text-2xl font-bold text-foreground mb-1">4,785.23</div>
                <div className="text-sm text-green-600">+1.2% ↗</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">10-Year Treasury</h3>
                <div className="text-2xl font-bold text-foreground mb-1">4.25%</div>
                <div className="text-sm text-red-600">-0.05% ↘</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Gold</h3>
                <div className="text-2xl font-bold text-foreground mb-1">$2,045</div>
                <div className="text-sm text-green-600">+0.8% ↗</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">USD/EUR</h3>
                <div className="text-2xl font-bold text-foreground mb-1">1.0892</div>
                <div className="text-sm text-green-600">+0.3% ↗</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Informed</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our weekly market insights and receive expert analysis directly in your inbox every Monday
            morning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
