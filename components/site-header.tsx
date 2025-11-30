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

  // Handle hydration to avoid SSR mismatch with Portal
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-5xl mx-auto rounded-full bg-pironi-cream/90 backdrop-blur-md border border-pironi-dark/5 shadow-2xl shadow-black/10 transition-all duration-300">
        <div className="px-6 md:px-8 h-14 md:h-16 flex items-center justify-between gap-8">
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
                src="/pironi/Logo_NoirRouge_CMJN.png"
                alt="Pironi Logo"
                fill
                className="object-cover rounded-2xl object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-pironi-dark/80 hover:text-pironi-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-pironi-yellow text-white rounded-[1rem] px-6 py-2 font-medium  text-sm"
            >
              <Link href="#devis">Demander un devis</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden bg-pironi-dark/5 rounded-full p-2 text-pironi-dark"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel - Portaled to body */}
      {mounted && typeof document !== "undefined" && (
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[9999] lg:hidden">
               {/* Backdrop/Overlay */}
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                 onClick={() => setIsOpen(false)}
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-pironi-cream p-6 shadow-2xl flex flex-col h-dvh"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-pironi-script text-2xl text-pironi-dark">Pironi</span>
                    <button onClick={toggleMenu} className="text-pironi-dark p-2 bg-black/5 rounded-full">
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-medium text-pironi-dark hover:text-pironi-red transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Button
                      asChild
                      className="mt-auto mb-8 bg-pironi-yellow text-white rounded-[1.3rem] w-full py-6 text-lg"
                    >
                      <Link href="#devis" onClick={() => setIsOpen(false)}>
                        Demander un devis
                      </Link>
                    </Button>
                  </nav>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
