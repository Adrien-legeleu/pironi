import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pironi-script",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-pironi-serif",
});

export const metadata: Metadata = {
  title: "Pironi - Mobilité sans limite",
  description: "Transport de marchandises, location de véhicules sans permis et chauffeur privé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${greatVibes.variable} ${cormorantGaramond.variable} bg-pironi-cream text-neutral-900 antialiased [font-family:var(--font-pironi-serif)] min-h-screen flex flex-col`}
      >
        <SiteHeader />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
