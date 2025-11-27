"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-pironi-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-pironi-bordeaux/[0.1] via-transparent to-pironi-yellow/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-pironi-bordeaux/[0.2]"
          className="left-[-10%] md:left-[-5%] max-md:hidden top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-pironi-yellow/[0.2]"
          className="right-[-5%] md:right-[0%] max-md:hidden top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-white/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-pironi-yellow/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-pironi-bordeaux/[0.2]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] backdrop-blur-[4px] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="sm:h-2 sm:w-2 h-1.5 w-1.5 fill-pironi-yellow" />
            <span className="md:text-sm  sm:text-xs text-[9px] text-white/70 tracking-wide uppercase">
              Transport de marchandises & mobilité sur mesure
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-pironi-script font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text p-4 text-transparent bg-gradient-to-b from-white via-[#FFFAEB] to-white/80">
                Pironi
              </span>
         
            
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10   leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              Pironi vous accompagne pour le transport de vos marchandises, vos déplacements sans permis et vos trajets avec chauffeur privé, en toute sérénité.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
          >
             <Button
                asChild
                className="bg-pironi-yellow text-pironi-dark rounded-[1.3rem] px-8 py-6 text-base font-semibold hover:bg-pironi-yellow-dark transition-all shadow-[0_0_20px_-5px_rgba(255,195,0,0.4)] w-full md:w-auto"
              >
                <Link href="#devis">Demander un devis</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-pironi-cream border border-white/20 rounded-[1.3rem] px-8 py-6 text-base hover:bg-white/10 hover:text-white transition-all w-full md:w-auto"
              >
                <Link href="#services">Découvrir nos services</Link>
              </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-pironi-dark via-transparent to-pironi-dark/80 pointer-events-none" />
    </section>
  );
}
