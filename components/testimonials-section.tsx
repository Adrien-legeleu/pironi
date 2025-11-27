"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Une réactivité exemplaire pour nos livraisons urgentes. Pironi est devenu notre partenaire de confiance.",
    by: "Alexandre, CEO chez TechCorp",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "Je suis confiant que mes déplacements sont entre de bonnes mains avec Pironi. Un service de classe mondiale.",
    by: "Daniel, CTO chez SecureNet",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "Le service de location sans permis m'a sauvé la mise. Véhicules propres et récents, équipe adorable.",
    by: "Stéphanie, COO chez InnovateCo",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "Les solutions Pironi rendent la planification de nos événements fluide. Je ne peux que les recommander !",
    by: "Marie, CFO chez FuturePlanning",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "Si je pouvais donner 6 étoiles, je le ferais. Le chauffeur était d'un professionnalisme rare.",
    by: "André, Directeur Artistique",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "TELLEMENT HEUREUX D'AVOIR TROUVÉ PIRONI !!!! Vous m'avez fait gagner un temps précieux.",
    by: "Jérémy, Product Manager",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "Il a fallu me convaincre, mais maintenant que nous utilisons Pironi, nous ne reviendrons jamais en arrière.",
    by: "Pamela, Directrice Marketing",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "Je serais perdu sans la flexibilité de Pironi. Le ROI est facilement de 100X pour nous en gain de temps.",
    by: "Daniel, Data Scientist",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: "C'est simplement le meilleur service. Point final.",
    by: "Fernand, Designer UX",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 9,
    testimonial: "J'ai changé pour Pironi il y a 5 ans et je n'ai jamais regretté.",
    by: "Antoine, Ingénieur DevOps",
    imgSrc: "https://i.pravatar.cc/150?img=10"
  },
  {
    tempId: 10,
    testimonial: "Je cherchais une solution comme Pironi depuis des ANNÉES. Si content d'avoir enfin trouvé !",
    by: "Pierre, Directeur Commercial",
    imgSrc: "https://i.pravatar.cc/150?img=11"
  },
  {
    tempId: 11,
    testimonial: "C'est si simple et intuitif, nous avons réservé notre flotte en 10 minutes.",
    by: "Marina, DRH chez TalentForge",
    imgSrc: "https://i.pravatar.cc/150?img=12"
  },
  {
    tempId: 12,
    testimonial: "Le support client de Pironi est inégalé. Ils sont toujours là quand nous avons besoin d'eux.",
    by: "Olivia, Customer Success",
    imgSrc: "https://i.pravatar.cc/150?img=13"
  },
  {
    tempId: 13,
    testimonial: "L'efficacité que nous avons gagnée depuis que nous utilisons Pironi est hors normes !",
    by: "Raj, Responsable Opérations",
    imgSrc: "https://i.pravatar.cc/150?img=14"
  },
  {
    tempId: 14,
    testimonial: "Pironi a révolutionné notre façon de gérer nos déplacements. C'est un game-changer !",
    by: "Lila, Spécialiste Workflow",
    imgSrc: "https://i.pravatar.cc/150?img=15"
  },
  {
    tempId: 15,
    testimonial: "L'évolutivité des solutions Pironi est impressionnante. Ils grandissent avec notre business.",
    by: "Trevor, Scaling Officer",
    imgSrc: "https://i.pravatar.cc/150?img=16"
  },
  {
    tempId: 16,
    testimonial: "J'apprécie comment Pironi innove continuellement. Toujours une longueur d'avance.",
    by: "Naomi, Innovation Lead",
    imgSrc: "https://i.pravatar.cc/150?img=17"
  },
  {
    tempId: 17,
    testimonial: "La qualité de service de Pironi est incroyable. Ça vaut largement l'investissement.",
    by: "Victor, Analyste Financier",
    imgSrc: "https://i.pravatar.cc/150?img=18"
  },
  {
    tempId: 18,
    testimonial: "La plateforme Pironi est robuste, mais facile à utiliser. L'équilibre parfait.",
    by: "Yuki, Tech Lead",
    imgSrc: "https://i.pravatar.cc/150?img=19"
  },
  {
    tempId: 19,
    testimonial: "Nous avons essayé plusieurs solutions, mais Pironi se démarque par sa fiabilité et sa performance.",
    by: "Zoé, Manager Performance",
    imgSrc: "https://i.pravatar.cc/150?img=20"
  },
  {
    tempId: 20,
    testimonial: "Une expérience client exceptionnelle du début à la fin. Bravo !",
    by: "Thomas, Architecte",
    imgSrc: "https://i.pravatar.cc/150?img=21"
  },
  {
    tempId: 21,
    testimonial: "Les véhicules sont toujours impeccables. Un vrai plaisir.",
    by: "Sophie, Consultante",
    imgSrc: "https://i.pravatar.cc/150?img=22"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer p-8 transition-all duration-500 ease-in-out font-pironi-serif rounded-[3rem]",
        isCenter 
          ? "z-10 bg-pironi-dark text-pironi-cream shadow-2xl shadow-black/10" 
          : "z-0 bg-white text-pironi-dark border border-pironi-muted/50 hover:border-pironi-yellow/50 shadow-2xl shadow-black/5"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -20 : position % 2 ? 15 : -15}px)
          scale(${isCenter ? 1 : 0.9})
          rotate(${isCenter ? 0 : position % 2 ? 2 : -2}deg)
        `,
      }}
    >
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-6 h-14 w-14 bg-pironi-muted object-cover object-top rounded-full shadow-sm"
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium leading-tight mb-6",
        isCenter ? "text-pironi-cream" : "text-pironi-dark"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm tracking-wide",
        isCenter ? "text-pironi-yellow" : "text-pironi-dark/60"
      )}>
        — {testimonial.by}
      </p>
    </div>
  );
};

export function TestimonialsSection() {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="py-24 bg-pironi-cream overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-pironi-script text-pironi-dark mb-4">
          Ils nous font confiance
        </h2>
        <p className="text-lg text-pironi-dark/70">
          Découvrez les retours de nos clients satisfaits
        </p>
      </div>
      
      <div
        className="relative w-full"
        style={{ height: 600 }}
      >
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-4 z-20">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-[1.5rem]",
              "bg-white border-1 border-pironi-dark/4 cursor-pointer hover:brightness-99",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pironi-yellow focus-visible:ring-offset-2"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-[1.5rem]",
              "bg-white border-1 border-pironi-dark/4 cursor-pointer   hover:brightness-99",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pironi-yellow focus-visible:ring-offset-2"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
