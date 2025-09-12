"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
  ]

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-12 py-4 flex items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src="/rasamala-logo.png"
              alt="Rasamala Investment Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Right: Desktop nav + button */}
        <div className="hidden md:flex items-center ml-auto space-x-8">
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-red-600 font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden ml-auto">
          <button
            className="p-2 rounded-md text-foreground hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
            <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
            <span className="block w-6 h-0.5 bg-foreground"></span>
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-background border-l border-border z-50 shadow-lg flex flex-col p-6 space-y-6">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-foreground rounded hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <span className="absolute w-5 h-0.5 bg-foreground rotate-45"></span>
              <span className="absolute w-5 h-0.5 bg-foreground -rotate-45"></span>
            </button>

            {/* Navigation links */}
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href
                      ? "text-red-600 font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
