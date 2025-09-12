import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-12 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get in <span className="text-primary font-serif">Touch</span>
          </h1>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your investment journey? Our team is here to help you grow your wealth with the same care and
            attention we give to nurturing the Rasamala tree.
          </p> */}
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Schedule a <span className="text-primary font-serif">Consultation</span></CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Investment Interest</label>
                  <select className="w-full px-4 py-2 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select your primary interest</option>
                    <option>Wealth Management</option>
                    <option>Retirement Planning</option>
                    <option>ESG Investing</option>
                    <option>Private Equity</option>
                    <option>Institutional Services</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Investment Amount</label>
                  <select className="w-full px-4 py-2 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select investment range</option>
                    <option>$100K - $500K</option>
                    <option>$500K - $1M</option>
                    <option>$1M - $5M</option>
                    <option>$5M - $10M</option>
                    <option>$10M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your investment goals and how we can help..."
                  ></textarea>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="space-y-8">
            {/* Office Locations */}
            <Card>
              <CardHeader>
                <CardTitle>Office Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Bandung Headquarters</h3>
                  <p className="text-muted-foreground text-sm mb-1">Jl. Ganesa No. 10, Bandung</p>
                  <p className="text-muted-foreground text-sm mb-1">Jawa Barat, Indonesia</p>
                  <p className="text-muted-foreground text-sm mb-2">Phone: +62 21 2555 1000</p>
                  <p className="text-muted-foreground text-sm">Email: bandung@rasamala.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  *Emergency support available 24/7 for existing clients
                </p>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" /> {/* Phone icon */}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">General Inquiries</p>
                    <p className="text-sm text-muted-foreground">+62 21 2555 1000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" /> {/* Mail icon */}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email Support</p>
                    <p className="text-sm text-muted-foreground">bandung@rasamala.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-primary" /> {/* Emergency icon */}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Emergency Line</p>
                    <p className="text-sm text-muted-foreground">+62 21 2555 1000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <Card>
            <CardContent className="px-8">
              {/* Header above the map */}
              <h2 className="text-xl text-foreground font-semibold mb-4">
                <span className="font-serif">We Are Here!</span>
              </h2>

              <div className="rounded-lg overflow-hidden w-full h-64">
                <Image
                  src="/itb-map.png"
                  alt="Jakarta Headquarters Map"
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
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
