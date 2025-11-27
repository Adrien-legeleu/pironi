"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"
import Link from "next/link"
import { vehicleModels } from "@/data/models"

export function ModelsSection() {
  return (
    <section id="models" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pironi-anthracite mb-4">
            Notre flotte premium
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de véhicules haut de gamme disponibles à la location
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicleModels.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border-2 border-gray-200 hover:border-pironi-red rounded-[3rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Vehicle Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Image {vehicle.name}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-pironi-red text-white px-3 py-1 rounded-full text-sm font-bold">
                    {vehicle.category}
                  </div>
                </div>

                {/* Vehicle Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-pironi-anthracite mb-2">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-pironi-red">
                      {vehicle.pricePerDay}€
                    </span>
                    <span className="text-gray-600">/jour</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-pironi-gold flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="#contact"
                    className="block w-full bg-pironi-red hover:bg-pironi-red/90 text-white text-center py-3 rounded-full font-semibold transition-all"
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
