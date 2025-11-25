"use client"

import { motion } from "framer-motion"
import { Phone, CalendarCheck, Truck, HeartHandshake } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Demande de devis",
    description: "Contactez-nous via le formulaire en ligne ou par téléphone pour nous faire part de votre besoin.",
    icon: Phone
  },
  {
    id: 2,
    title: "Validation & planification",
    description: "Nous confirmons ensemble les détails (lieux, dates, volume) et validons l'intervention.",
    icon: CalendarCheck
  },
  {
    id: 3,
    title: "Transport & Service",
    description: "Nos équipes prennent en charge votre demande avec professionnalisme et ponctualité.",
    icon: Truck
  },
  {
    id: 4,
    title: "Retour & Fidélisation",
    description: "Votre satisfaction est notre priorité. Nous restons à l'écoute après la prestation.",
    icon: HeartHandshake
  }
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div

          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pironi-dark mb-4">Comment fonctionne Pironi ?</h2>
          <p className="text-gray-600">Un processus simple et transparent en 4 étapes.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-pironi-muted -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
          
                className="bg-pironi-cream rounded-[3rem] p-8 shadow-black/10  text-center shadow-2xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border-4 border-pironi-cream">
                  <step.icon className="h-8 w-8 text-pironi-yellow-dark" />
                </div>
                <h3 className="text-xl font-bold text-pironi-dark mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Step Number Badge */}
                <div className="absolute top-0 right-0 bg-pironi-yellow text-pironi-dark font-bold w-8 h-8 rounded-bl-2xl rounded-tr-[2rem] flex items-center justify-center">
                  {step.id}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
