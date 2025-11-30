"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Fatima",
    review: "Personne très sympathique.",
    date: "03 juillet 2023",
    rating: 5,
  },
  {
    name: "Maxime P.",
    review: "Parfait.",
    date: "10 août 2023",
    rating: 5,
  },
  {
    name: "Mylène",
    review: "Excellent, réactif et clair.",
    date: "28 août 2023",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const fadeBlurVariants = {
    hidden: { opacity: 0, filter: "blur(16px)" },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les retours de nos clients satisfaits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              custom={index}
              variants={fadeBlurVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="p-8 rounded-[3rem] shadow-xl bg-card h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-lg text-foreground mb-6 flex-grow leading-relaxed">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
