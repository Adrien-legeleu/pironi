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
           
              className="group relative flex flex-col justify-between bg-white rounded-[3rem] p-10 shadow-[20px_20px_40px_rgba(0,0,0,0.05),-20px_-20px_40px_rgba(255,255,255,0.8)] hover:shadow-[20px_20px_60px_rgba(0,0,0,0.08),-20px_-20px_60px_rgba(255,255,255,1)] transition-all duration-500 aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]"
            >
              <div>
                {/* Icon Block */}
                <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-pironi-cream text-pironi-dark group-hover:bg-pironi-yellow group-hover:scale-110 transition-all duration-500">
                  <service.icon className="h-10 w-10" />
                </div>

                {/* Content */}
                <div className="mb-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-pironi-dark font-pironi-serif leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  {service.badge && (
                    <span className="inline-block mb-4 rounded-full bg-pironi-yellow/10 px-4 py-1.5 text-xs font-semibold text-pironi-yellow-dark tracking-wide uppercase">
                      {service.badge}
                    </span>
                  )}
                  <p className="text-pironi-dark/60 leading-relaxed text-lg font-light">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-8 border-t border-pironi-dark/5 relative z-10">
                <Link
                  href={service.link}
                  className="inline-flex items-center text-base font-medium text-pironi-dark group-hover:text-pironi-yellow-dark transition-colors"
                >
                  En savoir plus
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
