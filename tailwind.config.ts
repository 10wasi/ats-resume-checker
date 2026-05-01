import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Include CSS so @apply in globals.css can resolve theme utilities (e.g. shadow-soft).
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        accent: {
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8fafc",
          border: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: [
          "var(--font-poppins)",
          "Poppins",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #86efac 0%, #4ade80 45%, #22c55e 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(134,239,172,0.22) 0%, rgba(74,222,128,0.18) 50%, rgba(34,197,94,0.14) 100%)",
        "grid-faint":
          "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.07) 1px, transparent 0)",
      },
      boxShadow: {
        soft: "0 1px 0 rgba(0,0,0,0.04), 0 8px 24px -8px rgba(15,23,42,0.12)",
        "soft-lg":
          "0 1px 0 rgba(0,0,0,0.04), 0 20px 40px -12px rgba(15,23,42,0.18)",
        glow: "0 0 0 1px rgba(22,163,74,0.22), 0 12px 30px -10px rgba(22,163,74,0.28)",
      },
      keyframes: {
        "score-loading": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(350%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "score-loading": "score-loading 1.2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        "slow-pulse": "slow-pulse 2.4s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.45s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
