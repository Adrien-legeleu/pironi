"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Fatima",
    date: "03 juillet 2023",
    text: "Personne très sympathique.",
    rating: 5
  },
  {
    name: "Maxime P.",
    date: "10 août 2023",
    text: "Parfait.",
    rating: 5
  },
  {
    name: "Mylène",
    date: "28 août 2023",
    text: "Excellent, réactif et clair.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Témoignages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce que nos clients disent de nous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-lg rounded-[2rem] bg-card">
                <CardContent className="pt-8 pb-8 px-8 flex flex-col items-center text-center h-full justify-between">
                  <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl font-medium text-foreground mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="mt-auto">
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
