"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Leaf, Lock } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Réactivité",
    description: "Nous répondons à vos demandes en moins de 24h et intervenons dans les plus brefs délais.",
    dark: true,
    className: "md:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Fiabilité",
    description: "Un service professionnel sur lequel vous pouvez compter, avec un suivi rigoureux.",
    dark: true,
    className: "md:col-span-1",
  },
  {
    icon: Leaf,
    title: "Responsabilité",
    description: "Nous adoptons une conduite éco-responsable et optimisons nos trajets.",
    dark: false,
    className: "md:col-span-1",
  },
  {
    icon: Lock,
    title: "Sécurité",
    description: "Vos marchandises et vos déplacements sont assurés et sécurisés à chaque étape.",
    dark: false,
    className: "md:col-span-2",
  },
];

export function ValuesSection() {
  return (
    <section id="engagements" className="py-24 bg-pironi-cream">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-pironi-script text-pironi-dark mb-4">
            Nos engagements
          </h2>
          <p className="text-lg text-pironi-dark/70 max-w-2xl mx-auto">
            Des valeurs fortes qui guident chacune de nos missions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-[3rem] p-8 md:p-10 flex flex-col justify-between gap-4 shadow-2xl shadow-black/5 ${
                value.dark
                  ? "bg-pironi-bordeaux text-pironi-cream"
                  : "bg-white text-pironi-dark"
              } ${value.className}`}
            >
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center ${
                  value.dark
                    ? "bg-white/10 text-pironi-yellow"
                    : "bg-pironi-cream text-pironi-bordeaux"
                }`}
              >
                <value.icon className="h-6 w-6" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold font-pironi-serif mb-3">
                  {value.title}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  value.dark ? "text-pironi-cream/80" : "text-pironi-dark/70"
                }`}>
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
