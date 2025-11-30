"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Car, Package, UserCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const pricingData = [
  { duration: "Journée", price: "129€", km: "70 km" },
  { duration: "Week-end (72h)", price: "199€", km: "200 km" },
  { duration: "Semaine", price: "349€", km: "400 km" },
  { duration: "2 semaines (14j)", price: "499€", km: "800 km" },
  { duration: "1 mois", price: "1299€", km: "2000 km" },
  { duration: "3 mois", price: "2399€", km: "6000 km" },
  { duration: "6 mois", price: "2399€", km: "10000 km" },
];

export default function ServicesPage() {
  const fadeBlurVariants = {
    hidden: { opacity: 0, filter: "blur(16px)" },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Intro Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, filter: "blur(16px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Nos services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pironi vous propose trois services complémentaires pour répondre à tous vos besoins de mobilité : location sans permis, transport logistique et chauffeur privé.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location sans permis - Citroën Ami */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            custom={0}
            variants={fadeBlurVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 rounded-[3rem] shadow-2xl bg-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                      <Car className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Location sans permis
                    </h2>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Citroën Ami
                  </h3>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Véhicule accessible dès 14 ans, idéal pour les personnes avec permis suspendu ou en conduite accompagnée. Une solution de mobilité pratique et flexible.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Permis suspendu",
                      "Conduite accompagnée",
                      "À partir de 14 ans",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-background rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-foreground mb-4 text-lg">
                      Tarifs location Citroën Ami
                    </h4>
                    <div className="space-y-3">
                      {pricingData.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center py-2 border-b border-border last:border-0"
                        >
                          <span className="text-muted-foreground font-medium">
                            {item.duration}
                          </span>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">
                              {item.km}
                            </span>
                            <span className="font-bold text-foreground text-lg">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Caution :</span> 800€
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground italic">
                    Pour plus d'informations, nous contacter.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, filter: "blur(16px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/ami-sans-permis.jpg"
                    alt="Citroën Ami Pironi"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Transport logistique */}
      <section className="py-16 bg-background">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            custom={1}
            variants={fadeBlurVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 rounded-[3rem] shadow-2xl bg-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(16px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl order-2 lg:order-1"
                >
                  <Image
                    src="/images/transport-logistique.jpg"
                    alt="Transport logistique Pironi"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                      <Package className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Transport logistique
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Un service de transport adapté à vos besoins professionnels et personnels. Nous assurons la livraison rapide et sécurisée de vos marchandises.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Petits transports locaux rapides",
                      "Transport de matériel léger sécurisé",
                      "Flexibilité totale sur les horaires",
                      "Service professionnel et soigné",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground rounded-[3rem] px-8 py-6 text-base font-semibold hover:bg-primary/90 transition-all shadow-xl"
                  >
                    <Link href="/contact">Demander un devis logistique</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Chauffeur privé */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            custom={2}
            variants={fadeBlurVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 rounded-[3rem] shadow-2xl bg-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                      <UserCircle className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Chauffeur privé
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Service de chauffeur privé pour vos événements, trajets aéroport et déplacements professionnels. Disponible avec ou sans chauffeur selon vos besoins.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Service premium pour vos événements",
                      "Trajets aéroport et déplacements professionnels",
                      "Confort et discrétion garantis",
                      "Disponible avec ou sans chauffeur",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground rounded-[3rem] px-8 py-6 text-base font-semibold hover:bg-primary/90 transition-all shadow-xl"
                  >
                    <Link href="/contact">Demander un devis chauffeur</Link>
                  </Button>
                </div>

                <motion.div
                  initial={{ opacity: 0, filter: "blur(16px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/chauffeur-prive.jpg"
                    alt="Chauffeur privé Pironi"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, filter: "blur(16px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Expliquez-nous votre besoin
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nous vous répondons rapidement pour vous proposer la solution la mieux adaptée
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground rounded-[3rem] px-10 py-7 text-lg font-semibold hover:bg-primary/90 transition-all shadow-2xl"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
