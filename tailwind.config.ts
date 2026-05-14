import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          matte: "#0B0B0B",
          deep: "#111111",
          card: "#161616",
          soft: "#1A1A1A",
        },
        gold: {
          luxury: "#C6A56A",
          champagne: "#D9C29C",
          bronze: "#6E5A3C",
          pale: "#E8D9BE",
          dark: "#8B7040",
          glow: "#F0D080",
        },
        ivory: {
          DEFAULT: "#F5F1EA",
          soft: "#EDE8DF",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "shimmer": "shimmer 3s infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "draw-line": "drawLine 2s ease forwards",
        "spin-slow": "spin 8s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(198,165,106,0.4)" },
          "50%": { boxShadow: "0 0 0 20px rgba(198,165,106,0)" },
        },
        drawLine: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        glow: {
          "0%": { textShadow: "0 0 10px rgba(198,165,106,0.3)" },
          "100%": { textShadow: "0 0 30px rgba(198,165,106,0.8), 0 0 60px rgba(198,165,106,0.4)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C6A56A 0%, #D9C29C 50%, #C6A56A 100%)",
        "gold-shimmer": "linear-gradient(90deg, #6E5A3C 0%, #C6A56A 25%, #D9C29C 50%, #C6A56A 75%, #6E5A3C 100%)",
        "dark-gradient": "linear-gradient(180deg, #0B0B0B 0%, #111111 50%, #0B0B0B 100%)",
        "hero-overlay": "linear-gradient(to bottom, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.6) 50%, rgba(11,11,11,0.95) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "cinematic": "cubic-bezier(0.43, 0.195, 0.02, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
