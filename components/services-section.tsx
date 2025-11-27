"use client";

import { motion } from "framer-motion";
import { Car, Truck, UserCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Car,
    title: "Pironi sans permis",
    description: "Location de véhicules sans permis pour vos déplacements quotidiens. Une solution flexible et accessible à tous.",
    link: "#devis",
  },
  {
    icon: Truck,
    title: "Transport de marchandises",
    description: "Transport express et sécurisé de vos marchandises. Nous assurons une livraison rapide et soignée.",
    badge: "Devis sous 24h",
    link: "#devis",
  },
  {
    icon: UserCheck,
    title: "Pironi vous conduit",
    description: "Service de chauffeur privé pour vos trajets professionnels ou personnels. Confort et discrétion garantis.",
    link: "#devis",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-24 bg-pironi-cream">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-pironi-script text-pironi-dark mb-4">
            Nos services de mobilité
          </h2>
          <p className="text-lg text-pironi-dark/70 max-w-2xl mx-auto font-medium">
            Des solutions adaptées à chaque besoin, pour les particuliers et les professionnels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
             

              className="group relative flex flex-col justify-between bg-white rounded-[3rem] p-8 border border-pironi-dark/5 transition-all duration-300"
            >
              <div>
                {/* Icon Block */}
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-pironi-cream text-pironi-dark group-hover:bg-pironi-yellow group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="mb-6 bg-pironi-cream rounded-3xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-pironi-dark font-pironi-serif">
                      {service.title}
                    </h3>
                  </div>
                  {service.badge && (
                    <span className="inline-block mb-3 absolute top-5 right-5 rounded-full bg-pironi-yellow/10 px-3 py-1 text-xs font-semibold text-pironi-yellow-dark">
                      {service.badge}
                    </span>
                  )}
                  <p className="text-pironi-dark/70 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-pironi-dark/5">
                <Link
                  href={service.link}
                  className="inline-flex items-center bg-pironi-cream px-5 py-3 rounded-3xl text-sm font-bold text-pironi-dark group-hover:text-pironi-yellow-dark transition-colors"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
