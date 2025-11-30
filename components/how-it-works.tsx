"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardList, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Vous nous contactez",
    description: "Via notre formulaire ou par téléphone pour un premier échange.",
    icon: Phone
  },
  {
    number: "02",
    title: "Nous définissons votre besoin",
    description: "Sans permis, logistique ou chauffeur : nous adaptons la solution.",
    icon: ClipboardList
  },
  {
    number: "03",
    title: "Mise à disposition",
    description: "Confirmation rapide et mise à disposition du véhicule ou du service.",
    icon: CheckCircle2
  }
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et rapide pour vous accompagner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="flex flex-col items-center text-center bg-background"
            >
              <div className="w-24 h-24 rounded-full bg-background border-4 border-secondary flex items-center justify-center mb-8 shadow-xl relative z-10">
                <step.icon size={32} className="text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-sans">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
