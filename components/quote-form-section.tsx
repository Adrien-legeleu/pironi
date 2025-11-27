"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  typeDeBesoin: string;
  commentaire: string;
};

export function QuoteFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, setValue } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    
    toast.success("Demande envoyée", {
      description: "Nous revenons vers vous sous 24h avec une réponse détaillée.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="devis" className="py-24 bg-pironi-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pironi-yellow/10 via-transparent to-transparent pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-pironi-script text-pironi-dark mb-4">
            Demande de devis
          </h2>
          <p className="text-lg text-pironi-dark/70 max-w-2xl mx-auto">
            Chez Pironi, nous répondons à toutes les demandes de devis en moins de 24 heures. Plus votre demande est détaillée, plus notre réponse sera précise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-[3rem] shadow-[20px_20px_50px_rgba(0,0,0,0.1),-10px_-10px_30px_rgba(255,255,255,0.8)] p-8 md:p-12 border border-white/50"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nom" className="text-sm font-medium text-pironi-dark/80 ml-1">
                  Nom complet
                </label>
                <Input
                  id="nom"
                  placeholder="Votre nom"
                  className="rounded-2xl bg-pironi-cream/50 border-0 focus-visible:ring-2 focus-visible:ring-pironi-yellow focus-visible:ring-offset-0 h-12"
                  required
                  {...register("nom", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-pironi-dark/80 ml-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="rounded-2xl bg-pironi-cream/50 border-0 focus-visible:ring-2 focus-visible:ring-pironi-yellow focus-visible:ring-offset-0 h-12"
                  required
                  {...register("email", { required: true })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="telephone" className="text-sm font-medium text-pironi-dark/80 ml-1">
                  Téléphone
                </label>
                <Input
                  id="telephone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="rounded-2xl bg-pironi-cream/50 border-0 focus-visible:ring-2 focus-visible:ring-pironi-yellow focus-visible:ring-offset-0 h-12"
                  required
                  {...register("telephone", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="typeDeBesoin" className="text-sm font-medium text-pironi-dark/80 ml-1">
                  Type de besoin
                </label>
                <Select onValueChange={(value) => setValue("typeDeBesoin", value)} required>
                  <SelectTrigger className="rounded-2xl bg-pironi-cream/50 border-0 focus:ring-2 focus:ring-pironi-yellow h-12">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marchandises">Transport de marchandises</SelectItem>
                    <SelectItem value="sans-permis">Pironi sans permis</SelectItem>
                    <SelectItem value="chauffeur">Pironi vous conduit</SelectItem>
                    <SelectItem value="autre">Autre demande</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="commentaire" className="text-sm font-medium text-pironi-dark/80 ml-1">
                Détails de votre demande
              </label>
              <Textarea
                id="commentaire"
                placeholder="Lieux, dates, volumes, type de marchandise, contraintes particulières..."
                className="rounded-2xl bg-pironi-cream/50 border-0 focus-visible:ring-2 focus-visible:ring-pironi-yellow focus-visible:ring-offset-0 min-h-[120px] resize-y"
                {...register("commentaire")}
              />
            </div>

            <div className="pt-4 flex justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-pironi-yellow text-pironi-dark rounded-[1.3rem] px-10 py-6 text-base font-semibold hover:bg-pironi-yellow-dark transition-all shadow-lg shadow-pironi-yellow/20 w-full md:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer ma demande"
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
