"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, ShieldCheck, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/van-hero.jpg')",
          backgroundColor: "#050509" // Fallback
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pironi-dark/90 via-pironi-dark/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-pironi-bordeaux text-pironi-cream px-4 py-1.5 rounded-full text-xs max-sm:text-center sm:text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pironi-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pironi-yellow"></span>
            </span>
            Transport de marchandises & mobilité sur mesure
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Mobilité <br />
            <span className="text-pironi-yellow">sans limite</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
            Pironi vous accompagne pour le transport de vos marchandises, vos déplacements sans permis et vos trajets avec chauffeur privé, en toute sérénité.
          </p>

          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 text-gray-200">
            <li className="flex items-center gap-2">
              <Clock className="text-pironi-yellow h-5 w-5" />
              <span>Réactivité &lt; 24h</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="text-pironi-yellow h-5 w-5" />
              <span>Transport sécurisé</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-pironi-yellow h-5 w-5" />
              <span>Service sur mesure</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-pironi-yellow text-pironi-dark hover:bg-pironi-yellow-dark rounded-full px-8 py-6 text-base font-semibold transition-all hover:scale-105"
            >
              <Link href="#quote">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-white border border-white/20 hover:bg-white/10 rounded-full px-8 py-6 text-base transition-all"
            >
              <Link href="#services">Découvrir nos services</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)', scale: 0.95 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative"
        >
          <div className="bg-pironi-cream/95 backdrop-blur-sm p-8 rounded-[2rem] shadow-2xl max-w-md ml-auto border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 bg-pironi-yellow rounded-full flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-pironi-dark" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-pironi-dark">Expertise Pironi</h3>
                <p className="text-sm text-gray-600">Depuis plus de 10 ans</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-pironi-muted pb-4">
                <span className="text-gray-600">Livraisons mensuelles</span>
                <span className="font-bold text-2xl text-pironi-dark">+500</span>
              </div>
              <div className="flex items-center justify-between border-b border-pironi-muted pb-4">
                <span className="text-gray-600">Satisfaction client</span>
                <span className="font-bold text-2xl text-pironi-dark">98%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Types de services</span>
                <span className="font-bold text-2xl text-pironi-dark">3</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-pironi-muted">
              <p className="text-sm text-gray-500 italic">
                "Une solution fiable pour tous vos besoins de mobilité."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
