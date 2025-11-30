# Pironi - Documentation Technique & Architecture

## 🛠 Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (basé sur Radix UI)
- **Animations**: Framer Motion
- **Icônes**: Lucide React
- **Polices**: Google Fonts (Great Vibes, Cormorant Garamond)

## 🎨 Système de Design

### Couleurs (Définies dans `globals.css`)

| Variable | Couleur | Usage |
|----------|---------|-------|
| `--color-pironi-cream` | `#F8F4EF` | Fond principal (Background) |
| `--color-pironi-dark` | `#050509` | Texte principal, boutons foncés |
| `--color-pironi-bordeaux` | `#4B1F3A` | Accents, boutons secondaires |
| `--color-pironi-yellow` | `#FFC300` | Accents vifs, CTA |
| `--color-pironi-muted` | `#E4DFD7` | Éléments désactivés ou secondaires |
| `--color-pironi-red` | `#F61010` | Alertes ou accents forts |

### Typographie

- **Titres & Script**: `Great Vibes` (`--font-pironi-script`)
- **Corps & Labeur**: `Cormorant Garamond` (`--font-pironi-serif`)

## 📂 Structure du Projet

```
/app
  ├── layout.tsx        # Layout racine (Header, Footer, Fonts)
  ├── page.tsx          # Page d'accueil (Landing Page)
  ├── globals.css       # Styles globaux & Thème Tailwind v4
  └── mentions-legales/ # Page statique
/components
  ├── ui/               # Composants de base (shadcn)
  ├── site-header.tsx   # Barre de navigation
  ├── site-footer.tsx   # Pied de page
  ├── hero.tsx          # Section Hero (Haut de page)
  ├── services-section.tsx # Grille des services
  ├── how-it-works.tsx  # Section "Comment ça marche"
  ├── values-section.tsx # Section "Nos valeurs"
  ├── testimonials-section.tsx # Carrousel de témoignages
  └── quote-form-section.tsx # Formulaire de devis
```

## 📄 Détail des Pages & Sections

### 1. Page d'Accueil (`/`)

La page est composée des sections suivantes (dans l'ordre) :

1.  **Hero (`hero.tsx`)**
    *   Titre animé "Pironi" avec gradient.
    *   Sous-titre descriptif.
    *   Boutons CTA : "Demander un devis" et "Découvrir nos services".
    *   Formes décoratives animées en arrière-plan.

2.  **Services (`services-section.tsx`)**
    *   Présentation des 3 pôles principaux :
        *   **Location Sans Permis** (Fond Anthracite)
        *   **Transport Logistique** (Fond Bordeaux)
        *   **Chauffeur Privé** (Fond Noir)
    *   Cartes interactives avec animations au survol.

3.  **Comment ça marche (`how-it-works.tsx`)**
    *   Étapes claires pour l'utilisateur.

4.  **Valeurs (`values-section.tsx`)**
    *   Mise en avant des engagements de l'entreprise.

5.  **Témoignages (`testimonials-section.tsx`)**
    *   Carrousel interactif des avis clients.
    *   Design de cartes rotatives.

6.  **Formulaire de Devis (`quote-form-section.tsx`)**
    *   Formulaire complet pour la prise de contact.

### 2. Layout Global (`layout.tsx`)

-   **Header (`site-header.tsx`)** : Navigation fixe, logo, liens vers les sections.
-   **Footer (`site-footer.tsx`)** : Liens légaux, copyright.
-   **Toaster** : Notifications pour les interactions utilisateur (ex: envoi formulaire).

## 🚀 Commandes Utiles

-   `npm run dev` : Lancer le serveur de développement.
-   `npm run build` : Construire pour la production.
-   `npm run start` : Lancer la version de production.
