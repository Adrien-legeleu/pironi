"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features = [
  {
    step: "Étape 1",
    title: "Demande de devis",
    content: "Remplissez notre formulaire en ligne avec vos besoins spécifiques. Une démarche simple et rapide pour nous permettre de comprendre vos attentes.",
    image: "/mockups/mockup1.png",
  },
  {
    step: "Étape 2",
    title: "Validation & Planification",
    content: "Nous validons ensemble les détails et planifions l'intervention. Notre équipe s'assure que tout est parfaitement calé selon votre agenda.",
    image: "/mockups/mockup2.png",
  },
  {
    step: "Étape 3",
    title: "Transport & Suivi",
    content: "Nos équipes prennent en charge votre demande avec soin et ponctualité. Suivez l'avancement en temps réel pour une tranquillité d'esprit totale.",
    image: "/mockups/mockup3.png",
  },
  {
    step: "Étape 4",
    title: "Retour & Fidélisation",
    content: "Nous nous assurons de votre satisfaction pour une relation durable. Votre retour est précieux pour nous permettre de maintenir notre excellence.",
    image: "/mockups/mockup4.png",
  },
];

export function HowItWorks() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoPlayInterval = 4000;

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-pironi-script text-pironi-dark mb-4">
            Comment fonctionne Pironi ?
          </h2>
          <p className="text-lg text-pironi-dark/70 max-w-2xl mx-auto">
            Un processus simple et transparent pour vous accompagner.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 md:gap-8 cursor-pointer group"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index);
                  setProgress(0);
                }}
              >
                <div className="relative">
                  <motion.div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center relative justify-center border-2 transition-all duration-300 z-10 relative",
                      index === currentFeature
                        ? "bg-pironi-dark border-pironi-dark text-pironi-yellow scale-110 shadow-lg shadow-pironi-dark/20"
                        : "bg-white border-pironi-muted text-pironi-dark/50 group-hover:border-pironi-dark/50",
                    )}
                  >
                    {index <= currentFeature ? (
                      <span className="text-2xl flex items-center w-full h-full -translate-y-1 justify-center font-bold">{index + 1}</span>
                    ) : (
                      <span className="text-2xl flex items-center justify-center -translate-y-1 font-semibold">{index + 1}</span>
                    )}
                  </motion.div>
                  {index !== features.length - 1 && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-full bg-pironi-muted/30 -z-0" style={{ height: "calc(100% + 2.5rem)" }} />
                  )}
                </div>

                <div className="flex-1 pt-1">
                  <h3 className={cn(
                    "text-xl md:text-2xl font-bold font-pironi-serif mb-2 transition-colors",
                    index === currentFeature ? "text-pironi-dark" : "text-pironi-dark/60"
                  )}>
                    {feature.title}
                  </h3>
                  <p className="text-base text-pironi-dark/70 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-[3.5rem] shadow-2xl shadow-black/10 border-4 border-white bg-pironi-dark"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-[3rem] overflow-hidden"
                      initial={{ y: 20, opacity: 0, scale: 0.95 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -20, opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full  rounded-[3rem] object-cover"
                        width={800}
                        height={1000}
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <p className="text-pironi-yellow font-bold uppercase tracking-wider text-sm mb-2">
                          {feature.step}
                        </p>
                        <h4 className="text-2xl font-pironi-serif">
                          {feature.title}
                        </h4>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
