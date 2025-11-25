import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 md:px-6 py-24 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-pironi-dark mb-8">Mentions Légales</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-pironi-dark mb-4">1. Éditeur du site</h2>
            <p>
              Le site Pironi est édité par l'entreprise Pironi, domiciliée au [Adresse de l'entreprise].<br />
              Immatriculée au Registre du Commerce et des Sociétés sous le numéro [Numéro SIRET].<br />
              Téléphone : 01 23 45 67 89<br />
              Email : contact@pironi.fr
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-pironi-dark mb-4">2. Directeur de la publication</h2>
            <p>
              Directeur de la publication : [Nom du dirigeant]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-pironi-dark mb-4">3. Hébergement</h2>
            <p>
              Le site est hébergé par [Nom de l'hébergeur], [Adresse de l'hébergeur].<br />
              Téléphone : [Numéro de l'hébergeur]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-pironi-dark mb-4">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-pironi-dark mb-4">5. Données personnelles</h2>
            <p>
              Conformément à la loi informatique et libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour l'exercer, adressez-vous à contact@pironi.fr.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
