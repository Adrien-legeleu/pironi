"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const BGComponent1 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.5 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0"
  >
    <motion.circle
      variants={{ hover: { scaleY: 0.5, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="114.5"
      r="101.5"
      fill="rgba(255, 255, 255, 0.1)"
    />
    <motion.ellipse
      variants={{ hover: { scaleY: 2.25, y: -25 } }}
      transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
      cx="160.5"
      cy="265.5"
      rx="101.5"
      ry="43.5"
      fill="rgba(255, 255, 255, 0.1)"
    />
  </motion.svg>
);

const BGComponent2 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.05 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0"
  >
    <motion.rect
      x="14"
      width="153"
      height="153"
      rx="15"
      fill="rgba(255, 255, 255, 0.1)"
      variants={{ hover: { y: 219, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 12 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
    <motion.rect
      x="155"
      width="153"
      height="153"
      rx="15"
      fill="rgba(255, 255, 255, 0.1)"
      variants={{ hover: { y: 12, rotate: "90deg", scaleX: 2 } }}
      style={{ y: 219 }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
    />
  </motion.svg>
);

const BGComponent3 = () => (
  <motion.svg
    width="320"
    height="384"
    viewBox="0 0 320 384"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={{ hover: { scale: 1.25 } }}
    transition={{ duration: 1, ease: "backInOut" }}
    className="absolute inset-0 z-0"
  >
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
      d="M148.893 157.531C154.751 151.673 164.249 151.673 170.107 157.531L267.393 254.818C273.251 260.676 273.251 270.173 267.393 276.031L218.75 324.674C186.027 357.397 132.973 357.397 100.25 324.674L51.6068 276.031C45.7489 270.173 45.7489 260.676 51.6068 254.818L148.893 157.531Z"
      fill="rgba(255, 255, 255, 0.1)"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      d="M148.893 99.069C154.751 93.2111 164.249 93.2111 170.107 99.069L267.393 196.356C273.251 202.213 273.251 211.711 267.393 217.569L218.75 266.212C186.027 298.935 132.973 298.935 100.25 266.212L51.6068 217.569C45.7489 211.711 45.7489 202.213 51.6068 196.356L148.893 99.069Z"
      fill="rgba(255, 255, 255, 0.1)"
    />
    <motion.path
      variants={{ hover: { y: -50 } }}
      transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
      d="M148.893 40.6066C154.751 34.7487 164.249 34.7487 170.107 40.6066L267.393 137.893C273.251 143.751 273.251 153.249 267.393 159.106L218.75 207.75C186.027 240.473 132.973 240.473 100.25 207.75L51.6068 159.106C45.7489 153.249 45.7489 143.751 51.6068 137.893L148.893 40.6066Z"
      fill="rgba(255, 255, 255, 0.1)"
    />
  </motion.svg>
);

const ServiceCard = ({
  label,
  title,
  subtitle,
  description,
  cta,
  background,
  BGComponent,
  link,
  rotate = 0,
}: {
  label: string;
  title: string;
  subtitle?: string;
  description: string;
  cta: string;
  background: string;
  BGComponent: React.ComponentType;
  link: string;
  rotate?: number;
}) => {
  return (
    <motion.div
      initial={{ rotate: rotate }}
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05, rotate: 0 } }}
      className={`relative h-[450px] w-full max-w-[350px] shrink-0 overflow-hidden rounded-[2.5rem] p-8 ${background} ${rotate ? `rotate-${rotate}` : ""} shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between`}
    >
      <div className="relative z-10 text-white h-full flex flex-col">
        <span className="mb-4 block w-fit rounded-full bg-white/20 backdrop-blur-sm px-4 py-1 text-xs font-bold text-white border border-white/20 uppercase tracking-wider">
          {label}
        </span>
        <motion.div
          initial={{ scale: 0.9 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="mb-6 origin-top-left"
        >
          <h3 className="font-pironi-script text-5xl leading-[1.1] mb-2">
            {title}
          </h3>
          {subtitle && (
            <span className="text-xl font-light opacity-90 block">{subtitle}</span>
          )}
        </motion.div>
        
        <p className="text-lg text-white/90 leading-relaxed font-light">
          {description}
        </p>
      </div>

      <Link href={link} className="relative z-20 w-full">
        <button className="w-full rounded-xl border-2 border-white bg-white py-3 text-center font-bold uppercase text-pironi-dark backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">
          {cta}
        </button>
      </Link>
      
      <BGComponent />
    </motion.div>
  );
};

export function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-24 bg-pironi-cream overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-pironi-script text-pironi-dark mb-4">
            Nos services de mobilité
          </h2>
          <p className="text-lg text-pironi-dark/70 max-w-2xl mx-auto font-medium">
            Des solutions adaptées à chaque besoin, pour les particuliers et les professionnels.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-10 pb-10">
          <ServiceCard
            label="Location"
            title="Sans Permis"
            subtitle="Liberté & Flexibilité"
            description="Location de véhicules sans permis pour vos déplacements quotidiens. Une solution flexible et accessible à tous."
            cta="En savoir plus"
            background="bg-[#242B33]"
            BGComponent={BGComponent1}
            link="#devis"
            rotate={-1}
          />
          <ServiceCard
            label="Logistique"
            title="Transport"
            subtitle="Marchandises & Express"
            description="Transport express et sécurisé de vos marchandises. Nous assurons une livraison rapide et soignée."
            cta="En savoir plus"
            background="bg-pironi-bordeaux"
            BGComponent={BGComponent2}
            link="#devis"
            rotate={3}
          />
          <ServiceCard
            label="Premium"
            title="Chauffeur"
            subtitle="Privé & VTC"
            description="Service de chauffeur privé pour vos trajets professionnels ou personnels. Confort et discrétion garantis."
            cta="En savoir plus"
            background="bg-pironi-dark"
            BGComponent={BGComponent3}
            link="#devis"
            rotate={-5}
          />
        </div>
      </div>
    </section>
  );
}
