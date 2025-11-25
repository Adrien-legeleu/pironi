"use client"

import { motion } from "framer-motion"
import { Clock, ShieldCheck, Leaf, Lock } from "lucide-react"

export function ValuesSection() {
  return (
    <section id="values">
      {/* Bordeaux Section */}
      <div className="bg-pironi-bordeaux text-pironi-cream py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos engagements</h2>
            <p className="text-white/80 max-w-2xl text-lg">
              Des valeurs fortes qui guident chacune de nos missions au quotidien.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Clock className="h-8 w-8 text-pironi-yellow" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Réactivité</h3>
                <p className="text-white/70 leading-relaxed">
                  Nous nous engageons à répondre à toutes vos demandes de devis sous 24h. 
                  Notre organisation nous permet d'intervenir rapidement pour vos urgences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <ShieldCheck className="h-8 w-8 text-pironi-yellow" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Fiabilité</h3>
                <p className="text-white/70 leading-relaxed">
                  Un service constant, des horaires respectés et un suivi rigoureux. 
                  Vous pouvez compter sur nous pour honorer nos engagements, à chaque trajet.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cream Section */}
      <div className="bg-pironi-cream py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-[2rem] shadow-lg flex items-start gap-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="h-7 w-7 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-pironi-dark mb-2">Responsabilité environnementale</h3>
                <p className="text-gray-600">
                  Nous optimisons nos trajets pour réduire notre empreinte carbone et adoptons une conduite éco-responsable.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-[2rem] shadow-lg flex items-start gap-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Lock className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-pironi-dark mb-2">Sécurité maximale</h3>
                <p className="text-gray-600">
                  Vos marchandises et votre sécurité sont notre priorité absolue. Véhicules entretenus et chauffeurs formés.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
