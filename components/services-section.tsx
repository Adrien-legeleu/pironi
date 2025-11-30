"use client";

import { motion } from "framer-motion";
import { Car, Truck, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Location sans permis",
    icon: Car,
    description: [
      "Citroën Ami disponible immédiatement",
      "Accessible dès 14 ans (BSR)",
      "Idéal pour permis suspendu"
    ]
  },
  {
    title: "Transport logistique",
    icon: Truck,
    description: [
      "Transport de marchandises locales",
      "Matériel léger et colis",
      "Flexibilité horaire maximale"
    ]
  },
  {
    title: "Chauffeur privé",
    icon: UserCheck,
    description: [
      "Déplacements professionnels & privés",
      "Trajets gares et aéroports",
      "Service discret et ponctuel"
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trois solutions complémentaires pour répondre à tous vos besoins de mobilité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-2xl rounded-[3rem] bg-card hover:scale-[1.02] transition-transform duration-500">
                <CardHeader className="pt-12 pb-6 text-center">
                  <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <service.icon size={40} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-2xl font-sans font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-12 px-8 text-center">
                  <ul className="space-y-3">
                    {service.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground font-medium">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
