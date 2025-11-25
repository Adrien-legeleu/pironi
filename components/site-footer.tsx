import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-pironi-dark text-pironi-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4 block">
              PIRONI
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Transport de marchandises, mobilité sans permis et chauffeur privé. 
              Votre partenaire mobilité de confiance.
            </p>
            <div className="flex flex-col gap-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-pironi-yellow" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-pironi-yellow" />
                <span>contact@pironi.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-pironi-yellow" />
                <span>Île-de-France & Oise</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#hero" className="text-gray-400 hover:text-pironi-yellow transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-pironi-yellow transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/#values" className="text-gray-400 hover:text-pironi-yellow transition-colors">
                  Nos engagements
                </Link>
              </li>
              <li>
                <Link href="#quote" className="text-gray-400 hover:text-pironi-yellow transition-colors">
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Informations</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/mentions-legales" className="text-gray-400 hover:text-pironi-yellow transition-colors">
                  Mentions légales
                </Link>
              </li>
           
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Pironi. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500 italic">
            "Si vous l’avez, c’est qu’un camion vous l’a apporté."
          </p>
        </div>
      </div>
    </footer>
  )
}
