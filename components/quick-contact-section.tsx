"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function QuickContactSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 md:p-12 rounded-[3rem] shadow-2xl bg-primary text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Une question, un besoin urgent ?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Notre équipe est à votre écoute pour répondre à toutes vos demandes
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                <a
                  href="tel:0659316991"
                  className="text-2xl md:text-3xl font-bold hover:underline"
                >
                  06 59 31 69 91
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground rounded-[3rem] px-8 py-6 text-base font-semibold hover:bg-background/90 transition-all shadow-xl w-full sm:w-auto"
              >
                <a href="tel:0659316991">Appeler Pironi</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground rounded-[3rem] px-8 py-6 text-base hover:bg-primary-foreground/10 transition-all w-full sm:w-auto"
              >
                <Link href="/contact">Écrire un message</Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
