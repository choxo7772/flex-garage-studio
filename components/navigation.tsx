"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <div className="flex flex-col items-center justify-center space-y-0.5">
                <div className="w-5 h-0.5 bg-white rounded-full"></div>
                <div className="w-5 h-0.5 bg-white rounded-full"></div>
                <div className="w-5 h-0.5 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-tight uppercase">Flex Garage</span>
              <span className="font-semibold text-sm text-orange-500 leading-tight uppercase">Studio</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/contact">
              <Button>Get Quote</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link href="/contact">
                  <Button className="w-full">Get Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
