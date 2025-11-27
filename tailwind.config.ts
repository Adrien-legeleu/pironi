import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Pour Tailwind v4, la configuration des couleurs se fait dans globals.css avec @theme
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
