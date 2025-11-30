import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { HowItWorks } from "@/components/how-it-works";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesSection />
      <HowItWorks />
      <TestimonialsSection />
      
      {/* Bloc final "contact rapide" */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-[3rem] shadow-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
              Une question, un besoin urgent ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Notre équipe est à votre disposition pour vous répondre rapidement.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="rounded-full text-lg px-8 py-6 shadow-lg">
                <a href="tel:0659316991" className="flex items-center gap-2">
                  <Phone size={20} />
                  06 59 31 69 91
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 border-2">
                <Link href="/contact" className="flex items-center gap-2">
                  <Mail size={20} />
                  Écrire un message
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
