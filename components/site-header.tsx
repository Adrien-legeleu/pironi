"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10)
  })

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Engagements", href: "#values" },
    { name: "Demande de devis", href: "#quote" },
    { name: "Contact", href: "#footer" },
  ]

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-pironi-dark/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-7xl">
        <Link href="/" className="text-2xl font-bold text-white tracking-tight">
          PIRONI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-pironi-yellow transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-pironi-yellow text-pironi-dark hover:bg-pironi-yellow-dark rounded-full px-6 font-semibold"
          >
            <Link href="#quote">Demander un devis</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-pironi-dark border-l-pironi-muted/10 text-white w-[300px]">
              <SheetTitle className="text-left text-2xl font-bold text-white mb-8">PIRONI</SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium hover:text-pironi-yellow transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-pironi-yellow text-pironi-dark hover:bg-pironi-yellow-dark rounded-full mt-4 font-semibold w-full"
                >
                  <Link href="#quote">Demander un devis</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
