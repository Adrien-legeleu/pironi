"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Star, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Véhicules haut de gamme",
    description: "Une flotte exclusive de voitures premium soigneusement sélectionnées"
  },
  {
    icon: Star,
    title: "Prix attractifs",
    description: "Tarifs compétitifs et transparents sans frais cachés"
  },
  {
    icon: Clock,
    title: "Service 24/7",
    description: "Assistance et support disponibles à tout moment"
  },
  {
    icon: Award,
    title: "Véhicules récents",
    description: "Modèles des dernières années parfaitement entretenus"
  }
]

export function WhyPironiSection() {
  return (
    <section id="why-pironi" className="py-24 bg-gradient-to-br from-pironi-violet to-pironi-anthracite relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pironi-gold mb-4">
            Pourquoi choisir Pironi ?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            L'excellence et le professionnalisme au service de votre mobilité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pironi-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-pironi-gold" />
                </div>
                <h3 className="text-xl font-bold text-pironi-gold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: "500+", label: "Locations réussies" },
            { value: "98%", label: "Satisfaction client" },
            { value: "15+", label: "Véhicules premium" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-pironi-gold mb-2">
                {stat.value}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
