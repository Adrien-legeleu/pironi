"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Car, Package, UserCircle } from "lucide-react";

function BlurredShape({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(16px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: "easeOut" as const,
      }}
      className={className}
    />
  );
}

export function Hero() {
  const fadeBlurVariants = {
    hidden: { opacity: 0, filter: "blur(16px)" },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background blurred shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BlurredShape
          delay={0.3}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl"
        />
        <BlurredShape
          delay={0.5}
          className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-tr from-secondary/20 to-muted/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div
              custom={0}
              variants={fadeBlurVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight text-foreground">
                Pironi
              </h1>
              <p className="text-2xl sm:text-3xl font-light text-muted-foreground mb-4">
                Services de mobilité sur mesure
              </p>
            </motion.div>

            <motion.p
              custom={1}
              variants={fadeBlurVariants}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Location sans permis, transport logistique et chauffeur privé. Une même exigence de sérieux, de confort et de flexibilité.
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeBlurVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground rounded-[3rem] px-8 py-6 text-base font-semibold hover:bg-primary/90 transition-all shadow-xl w-full sm:w-auto"
              >
                <Link href="#devis">Demander un devis</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border rounded-[3rem] px-8 py-6 text-base hover:bg-accent transition-all w-full sm:w-auto"
              >
                <Link href="#services">Découvrir nos services</Link>
              </Button>
            </motion.div>

            {/* Service pills */}
            <motion.div
              custom={3}
              variants={fadeBlurVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm">
                <Car className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Sans permis</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm">
                <Package className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Logistique</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm">
                <UserCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Chauffeur privé</span>
              </div>
            </motion.div>
          </div>

          {/* Right image grid */}
          <motion.div
            custom={4}
            variants={fadeBlurVariants}
            initial="hidden"
            animate="visible"
            className="relative grid grid-cols-2 gap-4 h-[500px]"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl col-span-2">
              <Image
                src="/images/service-sans-permis.jpg"
                alt="Location sans permis - Citroën Ami"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-xl">
              <Image
                src="/images/service-logistique.jpg"
                alt="Transport logistique"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-xl">
              <Image
                src="/images/service-chauffeur.jpg"
                alt="Chauffeur privé"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
