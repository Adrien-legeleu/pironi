"use client";

import { motion } from "framer-motion";
import { MessageSquare, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Vous nous contactez",
    description: "Appelez-nous ou remplissez notre formulaire en ligne. Expliquez-nous votre besoin : location sans permis, transport logistique ou chauffeur privé.",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Nous définissons votre besoin",
    description: "Échange rapide pour comprendre vos attentes précises. Nous vous proposons la solution la mieux adaptée parmi nos trois services.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Confirmation et mise à disposition",
    description: "Validation de votre réservation et mise à disposition du véhicule ou du service. Tout est prêt pour répondre à votre demande.",
  },
];

export function HowItWorks() {
  const fadeBlurVariants = {
    hidden: { opacity: 0, filter: "blur(16px)" },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et transparent pour vous accompagner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              custom={index}
              variants={fadeBlurVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
