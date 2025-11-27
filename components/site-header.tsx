"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#hero", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#engagements", label: "Engagements" },
    { href: "#devis", label: "Demande de devis" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 z-40 w-full bg-transparent md:bg-pironi-dark/95 md:backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 lg:hidden w-auto aspect-[3/2]">
            <Image
              src="/pironi/Logo_NoirRouge_CMJN.png"
              alt="Pironi Logo"
              fill
              className="object-cover rounded-2xl object-left"
              priority
            />
          </div>
          <div className="relative h-10 max-lg:hidden w-auto aspect-[3/2]">
            <Image
              src="/pironi/Logo_DoréSurViolet_CMJN.png"
              alt="Pironi Logo"
              fill
              className="object-cover rounded-2xl object-left"
              priority
            />
          </div>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-pironi-cream/80 hover:text-pironi-yellow transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            className="bg-pironi-yellow text-pironi-dark rounded-[1.3rem] px-6 py-2 font-medium hover:bg-pironi-yellow-dark"
          >
            <Link href="#devis">Demander un devis</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden bg-[#242B33] rounded-2xl p-2 text-pironi-cream"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-50 w-full bg-pironi-dark p-6 shadow-2xl md:hidden flex flex-col"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <span className="font-pironi-script text-2xl text-white">Pironi</span>
                <button onClick={toggleMenu} className="text-pironi-cream">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-pironi-cream hover:text-pironi-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-pironi-yellow text-pironi-dark rounded-[1.3rem] w-full"
                >
                  <Link href="#devis" onClick={() => setIsOpen(false)}>
                    Demander un devis
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
