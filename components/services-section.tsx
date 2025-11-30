"use client";

import { motion } from "framer-motion";
import { Car, Package, UserCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Car,
    title: "Location sans permis",
    points: [
      "Citroën Ami accessible dès 14 ans",
      "Solution idéale pour permis suspendu",
      "Parfait pour la conduite accompagnée",
    ],
  },
  {
    icon: Package,
    title: "Transport logistique",
    points: [
      "Petits transports locaux rapides",
      "Transport de matériel léger sécurisé",
      "Flexibilité totale sur les horaires",
    ],
  },
  {
    icon: UserCircle,
    title: "Chauffeur privé",
    points: [
      "Service premium pour vos événements",
      "Trajets aéroport et déplacements pros",
      "Confort et discrétion garantis",
    ],
  },
];

export function ServicesSection() {
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
    <section id="services" className="relative w-full py-24 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos services de mobilité
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions adaptées à chaque besoin, pour les particuliers et les professionnels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={fadeBlurVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full p-8 rounded-[3rem] shadow-2xl bg-card hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col h-full space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  <ul className="space-y-3 flex-grow">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
