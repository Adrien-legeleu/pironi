"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Loader2, Send, Phone, Mail, MapPin } from "lucide-react"
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse email invalide." }),
  phone: z.string().min(10, { message: "Numéro de téléphone invalide." }),
  serviceType: z.string().min(1, { message: "Veuillez sélectionner un type de service." }),
  message: z.string().min(10, { message: "Merci de détailler votre demande (min 10 caractères)." }),
})

export function ContactSection() {
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
      description: "Nous revenons vers vous rapidement avec une réponse personnalisée.",
    })
    
    form.reset()
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pironi-anthracite mb-4">Contactez-nous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une question ? Un besoin spécifique ? Notre équipe est à votre écoute.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-pironi-anthracite mb-6">
                Nos coordonnées
              </h3>
              <div className="space-y-4">
                <a href="tel:0659316991" className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
                  <div className="w-12 h-12 bg-pironi-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Téléphone</div>
                    <div className="font-semibold text-pironi-anthracite group-hover:text-pironi-red transition-colors">
                      06 59 31 69 91
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-pironi-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <div className="font-semibold text-pironi-anthracite">
                      contact@pironi-rentcars.fr
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-pironi-violet rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Horaires</div>
                    <div className="font-semibold text-pironi-anthracite">
                      Service 24/7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-[3rem] p-8"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-pironi-anthracite">Nom complet</label>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    className="bg-white border-gray-200 rounded-xl h-12 focus-visible:ring-pironi-red"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-pironi-anthracite">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="bg-white border-gray-200 rounded-xl h-12 focus-visible:ring-pironi-red"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-pironi-anthracite">Téléphone</label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className="bg-white border-gray-200 rounded-xl h-12 focus-visible:ring-pironi-red"
                    {...form.register("phone")}
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="serviceType" className="text-sm font-medium text-pironi-anthracite">Type de service</label>
                  <Select 
                    onValueChange={(value) => form.setValue("serviceType", value)}
                    defaultValue={form.getValues("serviceType")}
                  >
                    <SelectTrigger className="bg-white border-gray-200 rounded-xl h-12 focus:ring-pironi-red">
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="location-luxury">Location véhicule de luxe</SelectItem>
                      <SelectItem value="sans-permis">Location sans permis</SelectItem>
                      <SelectItem value="chauffeur">Chauffeur privé</SelectItem>
                      <SelectItem value="longue-duree">Location longue durée</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.serviceType && (
                    <p className="text-sm text-red-500">{form.formState.errors.serviceType.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-pironi-anthracite">Votre demande</label>
                <Textarea
                  id="message"
                  placeholder="Dates, durée, véhicule souhaité, besoins spécifiques..."
                  className="bg-white border-gray-200 rounded-xl min-h-[120px] focus-visible:ring-pironi-red resize-none"
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-pironi-red text-white hover:bg-pironi-red/90 rounded-full py-6 text-lg font-semibold transition-all hover:scale-[1.01]"
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
      </div>
    </section>
  )
}
