"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Intro */}
      <section className="pt-32 pb-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Nos Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Pironi vous propose trois services complémentaires pour répondre à tous vos besoins de mobilité : 
            location de véhicules sans permis, transport logistique et chauffeur privé.
          </p>
        </motion.div>
      </section>

      {/* Location Sans Permis */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">
                Location sans permis
              </h2>
              <h3 className="text-2xl font-sans font-semibold mb-6">Citroën Ami – sans permis</h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                Véhicule accessible dès 14 ans, idéal en cas de permis suspendu ou pour la conduite accompagnée.
                Compacte, électrique et facile à conduire.
              </p>

              <ul className="space-y-3 mb-8">
                {["Permis suspendu", "Conduite accompagnée", "À partir de 14 ans (BSR)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Check size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Pricing Table */}
              <div className="bg-card rounded-[2rem] shadow-xl overflow-hidden mb-8 border border-border/50">
                <div className="grid grid-cols-3 bg-primary/10 p-4 font-bold text-sm md:text-base">
                  <div>Durée</div>
                  <div>Tarif</div>
                  <div>Km inclus</div>
                </div>
                <div className="divide-y divide-border">
                  {[
                    { d: "Journée", p: "129€", k: "70 km" },
                    { d: "Week-end (72h)", p: "199€", k: "200 km" },
                    { d: "Semaine", p: "349€", k: "400 km" },
                    { d: "2 semaines (14j)", p: "499€", k: "800 km" },
                    { d: "1 mois", p: "1299€", k: "2000 km" },
                    { d: "3 mois", p: "2399€", k: "6000 km" },
                    { d: "6 mois", p: "2399€", k: "10000 km" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 p-4 text-sm md:text-base hover:bg-secondary/30 transition-colors">
                      <div className="font-medium">{row.d}</div>
                      <div className="font-bold text-primary">{row.p}</div>
                      <div className="text-muted-foreground">{row.k}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-secondary/30 text-sm font-medium flex justify-between items-center">
                  <span>Caution : 800€</span>
                  <span className="text-muted-foreground italic">Assurance incluse</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-8 italic">
                Pour plus d'informations ou une durée personnalisée, n'hésitez pas à nous contacter.
              </p>

              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">Réserver une Ami</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/ami-sans-permis.jpg" 
                alt="Citroën Ami Pironi" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transport Logistique */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <Image 
                src="/images/transport-logistique.jpg" 
                alt="Transport Logistique" 
                fill 
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">
                Transport logistique
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Une solution fiable pour vos besoins de transport locaux. Nous prenons en charge vos marchandises avec soin et ponctualité.
              </p>

              <Card className="rounded-[2.5rem] border-none shadow-lg bg-secondary/10 mb-8">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {[
                      "Petits transports locaux et régionaux",
                      "Transport de matériel léger et colis",
                      "Flexibilité sur les horaires (7j/7)",
                      "Suivi personnalisé de votre course"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="text-primary mt-1 shrink-0" size={18} />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">Demander un devis logistique</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chauffeur Privé */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">
                Chauffeur privé
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Service de chauffeur privé pour vos événements, trajets aéroport ou déplacements professionnels. 
                Profitez d'un confort absolu et d'une discrétion totale.
              </p>

              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
                Disponible avec ou sans chauffeur
              </div>

              <Card className="rounded-[2.5rem] border-none shadow-lg bg-background mb-8">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {[
                      "Trajets gares et aéroports",
                      "Mise à disposition pour événements",
                      "Déplacements professionnels",
                      "Véhicules confortables et entretenus"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="text-primary mt-1 shrink-0" size={18} />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">Réserver un chauffeur</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-video md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/chauffeur-prive.jpg" 
                alt="Chauffeur Privé" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Un projet ? Une question ?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Expliquez-nous votre besoin, nous vous répondons rapidement avec une solution adaptée.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-10 py-8 text-lg shadow-xl hover:scale-105 transition-transform">
            <Link href="/contact" className="flex items-center gap-2">
              Contactez-nous <ArrowRight />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
