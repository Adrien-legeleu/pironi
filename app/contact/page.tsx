"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Intro */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground"
          >
            Contact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Besoin d'une location sans permis, d'un transport logistique ou d'un chauffeur privé ? 
            Remplissez le formulaire ci-dessous ou contactez-nous directement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="rounded-[3rem] shadow-xl bg-card border-none overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium ml-1">Nom complet</label>
                      <Input id="name" placeholder="Votre nom" className="rounded-xl h-12 bg-secondary/20 border-transparent focus:bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                      <Input id="email" type="email" placeholder="votre@email.com" className="rounded-xl h-12 bg-secondary/20 border-transparent focus:bg-background" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium ml-1">Téléphone</label>
                      <Input id="phone" type="tel" placeholder="06 12 34 56 78" className="rounded-xl h-12 bg-secondary/20 border-transparent focus:bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium ml-1">Type de service</label>
                      <Select>
                        <SelectTrigger className="rounded-xl h-12 bg-secondary/20 border-transparent focus:bg-background">
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sans-permis">Location sans permis</SelectItem>
                          <SelectItem value="logistique">Transport logistique</SelectItem>
                          <SelectItem value="chauffeur">Chauffeur privé</SelectItem>
                          <SelectItem value="autre">Autre demande</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Détaillez votre besoin..." 
                      className="rounded-xl min-h-[150px] bg-secondary/20 border-transparent focus:bg-background resize-none" 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full h-14 text-lg shadow-lg mt-4">
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Side Info Block */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Info Card */}
            <Card className="rounded-[2.5rem] shadow-lg bg-primary text-primary-foreground border-none">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5" /> Contact
                  </h3>
                  <p className="text-lg font-medium">06 59 31 69 91</p>
                  <p className="opacity-80">contact@pironi.fr</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> Zone
                  </h3>
                  <p className="opacity-80">Île-de-France</p>
                  <p className="opacity-80">Paris & Banlieue</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" /> Horaires
                  </h3>
                  <p className="opacity-80">Sur rendez-vous</p>
                  <p className="opacity-80">7j/7 selon disponibilité</p>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Image */}
            <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image 
                src="/images/contact-pironi.jpg" 
                alt="Contact Pironi" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}
