"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
// Avatar import removed

const testimonials = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Gérant PME BTP",
    content: "Pironi assure le transport de notre matériel sur chantier avec une ponctualité exemplaire. Un partenaire de confiance pour notre logistique.",
    rating: 5,
    type: "Transport de marchandises"
  },
  {
    id: 2,
    name: "Sophie Martin",
    role: "Particulier",
    content: "J'ai loué une voiture sans permis pour 2 semaines. Véhicule impeccable, service souriant et démarches simplifiées. Je recommande !",
    rating: 5,
    type: "Pironi sans permis"
  },
  {
    id: 3,
    name: "Marc Weber",
    role: "Directeur Commercial",
    content: "Le service chauffeur est top. Conduite souple, véhicule confortable, idéal pour travailler pendant les trajets. Très professionnel.",
    rating: 5,
    type: "Pironi vous conduit"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pironi-dark mb-4">Ils nous font confiance</h2>
          <p className="text-gray-600">Découvrez les retours de nos clients professionnels et particuliers.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full border-none shadow-2xl shadow-black/10 bg-pironi-cream/30 rounded-[3rem] relative overflow-visible">
                <div className="absolute -top-4 -left-2 text-pironi-yellow/20">
                  <Quote className="h-16 w-16 rotate-180" />
                </div>
                
                <CardHeader className="pb-2 pt-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-pironi-yellow text-pironi-yellow" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 border-t border-pironi-muted pt-4">
                    <div className="h-10 w-10 rounded-full bg-pironi-dark text-white flex items-center justify-center font-bold text-sm">
                      {testimonial.name.charAt(0)}
                      {testimonial.name.split(' ')[1]?.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-pironi-dark text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                      <p className="text-xs text-pironi-yellow-dark font-medium mt-0.5">{testimonial.type}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
