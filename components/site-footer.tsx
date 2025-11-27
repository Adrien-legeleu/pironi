"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-pironi-dark text-pironi-cream pt-20 pb-10">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="relative h-10 w-32">
              {/* Using a white filter or brightness on the logo if needed, or just the text if logo is dark */}
              {/* Assuming the logo might need adjustment for dark bg, or use text fallback */}
              <span className="font-pironi-script text-4xl text-white">Pironi</span>
            </div>
            <p className="text-pironi-cream/70 leading-relaxed max-w-xs">
              Transport de marchandises, mobilité sans permis et chauffeur privé.
              Votre partenaire mobilité de confiance.
            </p>
            <Image src="/pironi/Plaque_DoréSurViolet_CMJN.png" alt="Logo" width={200} height={200} className="w-full rounded-2xl " />
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-pironi-serif text-2xl font-bold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-pironi-cream/80">
                <Phone className="h-5 w-5 text-pironi-yellow mt-0.5" />
                <span>06 59 31 69 91</span>
              </li>
              <li className="flex items-start gap-3 text-pironi-cream/80">
                <Mail className="h-5 w-5 text-pironi-yellow mt-0.5" />
                <span>contact@pironi.fr</span>
              </li>
              <li className="flex items-start gap-3 text-pironi-cream/80">
                <MapPin className="h-5 w-5 text-pironi-yellow mt-0.5" />
                <span>
                  123 Avenue de la Mobilité<br />
                  75000 Paris
                </span>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-pironi-serif text-2xl font-bold text-white">Navigation</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#hero" className="text-pironi-cream/80 hover:text-pironi-yellow transition-colors">
                Accueil
              </Link>
              <Link href="#services" className="text-pironi-cream/80 hover:text-pironi-yellow transition-colors">
                Nos Services
              </Link>
              <Link href="#devis" className="text-pironi-cream/80 hover:text-pironi-yellow transition-colors">
                Demande de devis
              </Link>
              <Link href="#" className="text-pironi-cream/80 hover:text-pironi-yellow transition-colors">
                Mentions légales
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-pironi-cream/50">
          <p>&copy; {new Date().getFullYear()} Pironi. Tous droits réservés.</p>
          <p className="italic font-pironi-serif text-lg max-sm:text-center text-pironi-cream/80">
            "Si vous l’avez, c’est qu’un camion vous l’a apporté."
          </p>
        </div>
      </div>
    </footer>
  );
}
