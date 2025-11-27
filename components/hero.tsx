"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-pironi-dark"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pironi-dark via-pironi-dark to-pironi-bordeaux/40 pointer-events-none" />
      
      <div className="container relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center rounded-full bg-pironi-bordeaux/90 text-pironi-cream px-4 py-1 text-[9px] sm:text-xs uppercase tracking-[0.12em] mb-6">
              Transport de marchandises & mobilité sur mesure
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-pironi-script text-white leading-[1.1] mb-6">
              Mobilité <br />
              <span className="text-pironi-yellow">sans limite</span>
            </h1>
            
            <p className="text-lg text-pironi-cream/80 mb-8 max-w-md leading-relaxed">
              Pironi vous accompagne pour le transport de vos marchandises, vos déplacements sans permis et vos trajets avec chauffeur privé, en toute sérénité.
            </p>
            
            <ul className="flex flex-col gap-3 mb-8 text-pironi-cream/90">
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-pironi-yellow" />
                <span>Réactivité &lt; 24h</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-pironi-yellow" />
                <span>Transport sécurisé</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="h-5 w-5 text-pironi-yellow" />
                <span>Service sur mesure</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-pironi-yellow text-pironi-dark rounded-full px-8 py-6 text-base font-semibold hover:bg-pironi-yellow-dark transition-all shadow-[0_0_20px_-5px_rgba(255,195,0,0.4)]"
              >
                <Link href="#devis">Demander un devis</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-pironi-cream border border-white/20 rounded-full px-8 py-6 text-base hover:bg-white/10 hover:text-white transition-all"
              >
                <Link href="#services">Découvrir nos services</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-[3rem] shadow-2xl shadow-black/10 p-8 md:p-10 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-pironi-dark font-pironi-serif text-3xl font-bold">Pironi</span>
                  <span className="text-pironi-dark/60 text-sm uppercase tracking-wider">Services Premium</span>
                </div>
                <div className="h-12 w-12 rounded-full bg-pironi-yellow flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-pironi-dark" />
                </div>
              </div>
              
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-3xl ">
                  <div className="h-10 w-10 rounded-full bg-pironi-cream flex items-center justify-center text-pironi-bordeaux font-bold">
                    +50
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-pironi-dark">Livraisons par mois</span>
                    <span className="text-xs text-pironi-dark/60">Fiabilité garantie</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-3xl ">
                  <div className="h-10 w-10 rounded-full bg-pironi-cream flex items-center justify-center text-pironi-bordeaux font-bold">
                    Pro
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-pironi-dark">Clients & Particuliers</span>
                    <span className="text-xs text-pironi-dark/60">Solutions adaptées</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-3xl ">
                  <div className="h-10 w-10 rounded-full bg-pironi-cream flex items-center justify-center text-pironi-bordeaux font-bold">
                    IDF
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-pironi-dark">Zones desservies</span>
                    <span className="text-xs text-pironi-dark/60">Paris & Île-de-France</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-pironi-yellow/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-pironi-bordeaux/40 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
