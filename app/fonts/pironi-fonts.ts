import localFont from "next/font/local";

/**
 * 1. ADELIA — Logo "pironi"
 * Place le fichier dans /public/fonts/adelia.woff2
 */
export const adelia = localFont({
  src: [
    {
      path: "/fonts/adelia.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-adelia",
  display: "swap",
});

/**
 * 2. AUDREY — Baseline "Rent Cars"
 * Place le fichier dans /public/fonts/audrey.woff2
 */
export const audrey = localFont({
  src: [
    {
      path: "/fonts/audrey.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-audrey",
  display: "swap",
});
