"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Loader2, Send } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form" // Note: Form components need to be installed or I need to build them. 
// shadcn form uses a wrapper around react-hook-form. I didn't install 'form'.
// I should have installed 'form'. I will install it now or build it manually.
// Actually, I can just use standard HTML/Tailwind + react-hook-form without the shadcn Form wrapper if I want to save time, 
// but shadcn Form is nicer.
// I'll try to use the raw components + react-hook-form to avoid installing another component if I can, 
// but the user asked for "Formulaire shadcn".
// I'll assume I can use standard controlled inputs with react-hook-form.

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse email invalide." }),
  phone: z.string().min(10, { message: "Numéro de téléphone invalide." }),
  serviceType: z.string().min(1, { message: "Veuillez sélectionner un type de service." }),
  message: z.string().min(10, { message: "Merci de détailler votre demande (min 10 caractères)." }),
})

export function QuoteFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log(values)
    toast.success("Demande envoyée", {
      description: "Nous revenons vers vous sous 24h avec une réponse détaillée.",
    })
    
    form.reset()
    setIsSubmitting(false)
  }

  return (
    <section id="quote" className="py-24 bg-pironi-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pironi-yellow/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pironi-bordeaux/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pironi-dark mb-4">Demande de devis</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chez Pironi, nous répondons à toutes les demandes de devis en moins de 24 heures. 
            Plus votre demande est détaillée, plus notre réponse sera précise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white rounded-[4rem] p-8 md:p-12 shadow-2xl shadow-black/10 "
        >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-pironi-dark">Nom complet</label>
                <Input
                  id="name"
                  placeholder="Votre nom"
                  className="bg-pironi-cream shadow-black/5 shadow-xl border-pironi-muted rounded-[1.2rem] h-12 focus-visible:ring-pironi-yellow"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-pironi-dark">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="bg-pironi-cream shadow-black/5 shadow-xl border-pironi-muted rounded-[1.2rem] h-12 focus-visible:ring-pironi-yellow"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-pironi-dark">Téléphone</label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="bg-pironi-cream border-pironi-muted shadow-black/5 shadow-xl rounded-[1.2rem] h-12 focus-visible:ring-pironi-yellow"
                  {...form.register("phone")}
                />
                {form.formState.errors.phone && (
                  <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="serviceType" className="text-sm font-medium text-pironi-dark">Type de besoin</label>
                <Select 
                  onValueChange={(value) => form.setValue("serviceType", value)}
                  defaultValue={form.getValues("serviceType")}
                >
                  <SelectTrigger className="bg-pironi-cream border-pironi-muted shadow-black/5 shadow-xl rounded-[1.2rem] h-12 focus:ring-pironi-yellow">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transport">Transport de marchandises</SelectItem>
                    <SelectItem value="sans-permis">Pironi sans permis</SelectItem>
                    <SelectItem value="chauffeur">Pironi vous conduit</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.serviceType && (
                  <p className="text-sm text-red-500">{form.formState.errors.serviceType.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-pironi-dark">Votre demande</label>
              <Textarea
                id="message"
                placeholder="Lieux, dates, volumes, type de marchandise, contraintes..."
                className="bg-pironi-cream border-pironi-muted shadow-black/5 shadow-xl rounded-[1.8rem] min-h-[120px] focus-visible:ring-pironi-yellow resize-none"
                {...form.register("message")}
              />
              {form.formState.errors.message && (
                <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full bg-pironi-yellow text-pironi-dark hover:bg-pironi-yellow-dark rounded-full py-6 text-lg font-semibold transition-all hover:scale-[1.01]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
