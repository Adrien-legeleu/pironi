"use client"

import { motion } from "framer-motion"
import { Car, Truck, UserCheck, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// Badge import removed 
// Actually I didn't install Badge. I'll use a styled div.

const services = [
  {
    id: "sans-permis",
    title: "Pironi sans permis",
    description: "Location de véhicule sans permis pour vos déplacements quotidiens. Liberté et autonomie garanties.",
    icon: Car,
    badge: null,
    link: "#contact"
  },
  {
    id: "transport",
    title: "Transport de marchandises",
    description: "Transport de colis, marchandises et petite logistique locale. Rapide et sécurisé.",
    icon: Truck,
    badge: "Devis sous 24h",
    link: "#quote"
  },
  {
    id: "chauffeur",
    title: "Pironi vous conduit",
    description: "Service de chauffeur privé pour vos trajets professionnels ou personnels. Confort et discrétion.",
    icon: UserCheck,
    badge: null,
    link: "#contact"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-pironi-cream">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pironi-dark mb-4">Nos services de mobilité</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions adaptées à chaque besoin, pour les professionnels et les particuliers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full border-none shadow-2xl shadow-black/10  hover:shadow-xl transition-shadow duration-300 rounded-[3rem] overflow-hidden bg-white flex flex-col">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-pironi-cream rounded-2xl flex items-center justify-center mb-6 text-pironi-yellow-dark">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-pironi-dark">{service.title}</CardTitle>
                    {service.badge && (
                      <span className="bg-pironi-yellow/20 text-pironi-yellow-dark text-xs font-bold px-2 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-4 border-t border-gray-50">
                  <Link 
                    href={service.link} 
                    className="group flex items-center text-sm font-semibold text-pironi-dark hover:text-pironi-yellow-dark transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
