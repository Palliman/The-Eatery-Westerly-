"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 md:h-16">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-32 md:h-12 md:w-40">
              <Image
                src="/the-eatery-logo.png"
                alt="The Eatery"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#menu" className="text-sm font-medium hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#events" className="text-sm font-medium hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-secondary">
              <Link href="/#contact">Event Planning Contact</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="tel:+14013150777">Call for Pick Up</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <div className="relative h-10 w-32">
                    <Image src="/the-eatery-logo.png" alt="The Eatery" fill className="object-contain" sizes="128px" />
                  </div>
                </div>
                <nav className="flex flex-col space-y-6 py-6">
                  <Link
                    href="/"
                    className="text-lg font-medium text-foreground hover:text-primary"
                    onClick={() => document.querySelector<HTMLElement>("[data-radix-collection-item]")?.click()}
                  >
                    Home
                  </Link>
                  <Link
                    href="/#menu"
                    className="text-lg font-medium text-foreground hover:text-primary"
                    onClick={() => document.querySelector<HTMLElement>("[data-radix-collection-item]")?.click()}
                  >
                    Menu
                  </Link>
                  <Link
                    href="/#about"
                    className="text-lg font-medium text-foreground hover:text-primary"
                    onClick={() => document.querySelector<HTMLElement>("[data-radix-collection-item]")?.click()}
                  >
                    About
                  </Link>
                  <Link
                    href="/#events"
                    className="text-lg font-medium text-foreground hover:text-primary"
                    onClick={() => document.querySelector<HTMLElement>("[data-radix-collection-item]")?.click()}
                  >
                    Events
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-lg font-medium text-foreground hover:text-primary"
                    onClick={() => document.querySelector<HTMLElement>("[data-radix-collection-item]")?.click()}
                  >
                    Contact
                  </Link>
                </nav>
                <div className="mt-auto py-6 border-t border-border">
                  <p className="text-xs text-center text-muted-foreground">
                    &copy; {new Date().getFullYear()} The Eatery
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
