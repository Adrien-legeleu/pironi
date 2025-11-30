"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeInBlur = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 1.2 }
  }
};

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20 pb-10">
      {/* Decorative blurred shapes */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInBlur}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-foreground mb-6">
            Pironi – services de mobilité sur mesure
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-serif leading-relaxed">
            Location sans permis, transport logistique et chauffeur privé. Une même exigence de sérieux, de confort et de flexibilité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              asChild 
              size="lg" 
              className="rounded-[2rem] px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">Demander un devis</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-[2rem] px-8 py-6 text-lg border-2 hover:bg-secondary/50 transition-all"
            >
              <Link href="/services">Découvrir nos services</Link>
            </Button>
          </div>

          {/* Service Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["Sans permis", "Logistique", "Chauffeur privé"].map((service, i) => (
              <span 
                key={service}
                className="px-6 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border/50"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            { src: "/images/service-sans-permis.jpg", alt: "Service sans permis" },
            { src: "/images/service-logistique.jpg", alt: "Service logistique" },
            { src: "/images/service-chauffeur.jpg", alt: "Service chauffeur" }
          ].map((img, i) => (
            <div 
              key={i} 
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
