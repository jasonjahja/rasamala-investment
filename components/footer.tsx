import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="container mx-auto px-12 py-16">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-12">
          {/* Left: Logo + Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/rasamala-logo.png"
                  alt="Rasamala Investment Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="text-muted-foreground text-pretty">
              Building wealth through expertise, integrity, and innovation since 2005.
            </p>
          </div>

          {/* Right: Services + Resources + Contact */}
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
            {/* Services */}
            <div>
              <h3 className="font-semibold text-sidebar-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                    Wealth Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                    Institutional Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                    Advisory Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Sectors */}
            <div>
              <h3 className="font-semibold text-sidebar-foreground mb-4">Sectors</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                    -
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                    -
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                    -
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                    -
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-sidebar-foreground mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Bandung Headquarters</p>
                <p>Jawa Barat, Indonesia</p>
                <p>+62 21 2555 1000</p>
                <p>bandung@rasamala.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sidebar-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 Rasamala. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary cursor-pointer">
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary cursor-pointer">
                Twitter
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary cursor-pointer">
                Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
