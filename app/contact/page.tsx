"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Loader2, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormData = {
  nom: string;
  email: string;
  telephone: string;
  typeDeService: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, setValue } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);

    toast.success("Message envoyé", {
      description: "Nous vous répondons dans les plus brefs délais.",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, filter: "blur(16px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Besoin d'une location sans permis, d'un transport logistique ou d'un chauffeur privé ? Remplissez le formulaire ci-dessous ou contactez-nous directement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(16px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 md:p-12 rounded-[3rem] shadow-2xl bg-card">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Envoyez-nous un message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="text-sm font-medium text-foreground ml-1">
                        Nom complet
                      </label>
                      <Input
                        id="nom"
                        placeholder="Votre nom"
                        className="rounded-2xl bg-background border-border focus-visible:ring-2 focus-visible:ring-ring h-12"
                        required
                        {...register("nom", { required: true })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        className="rounded-2xl bg-background border-border focus-visible:ring-2 focus-visible:ring-ring h-12"
                        required
                        {...register("email", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="telephone" className="text-sm font-medium text-foreground ml-1">
                        Téléphone
                      </label>
                      <Input
                        id="telephone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        className="rounded-2xl bg-background border-border focus-visible:ring-2 focus-visible:ring-ring h-12"
                        required
                        {...register("telephone", { required: true })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="typeDeService" className="text-sm font-medium text-foreground ml-1">
                        Type de service
                      </label>
                      <Select onValueChange={(value) => setValue("typeDeService", value)} required>
                        <SelectTrigger className="rounded-2xl bg-background border-border focus:ring-2 focus:ring-ring h-12">
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sans-permis">Sans permis</SelectItem>
                          <SelectItem value="logistique">Logistique</SelectItem>
                          <SelectItem value="chauffeur">Chauffeur privé</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre besoin..."
                      className="rounded-2xl bg-background border-border focus-visible:ring-2 focus-visible:ring-ring min-h-[150px] resize-y"
                      required
                      {...register("message", { required: true })}
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary text-primary-foreground rounded-[3rem] px-10 py-6 text-base font-semibold hover:bg-primary/90 transition-all shadow-xl w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        "Envoyer le message"
                      )}
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Image */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(16px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <Card className="p-8 rounded-[3rem] shadow-xl bg-card">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Informations de contact
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Téléphone</p>
                      <a
                        href="tel:0659316991"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        06 59 31 69 91
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Zone d'intervention</p>
                      <p className="text-muted-foreground">Île-de-France</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Horaires</p>
                      <p className="text-muted-foreground">Sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </Card>

              <motion.div
                initial={{ opacity: 0, filter: "blur(16px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative h-[300px] rounded-[3rem] overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/contact-pironi.jpg"
                  alt="Contact Pironi"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
