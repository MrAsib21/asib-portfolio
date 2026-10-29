import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "var(--color-paper)",
          light: "#161B22",
          dark: "#0D1117",
          card: "#161B22",
        },
        desk: {
          DEFAULT: "var(--color-desk)",
          light: "#21262D",
          dark: "#0D1117",
          deep: "#05070A",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          soft: "#C9D1D9",
          faint: "#8B949E",
        },
        vermilion: {
          DEFAULT: "var(--color-vermilion)",
          hover: "#FF6E6E",
          light: "#3E1E22",
        },
        highlighter: {
          DEFAULT: "var(--color-highlighter)",
          tint: "#1A3324",
        },
        olive: {
          DEFAULT: "var(--color-muted-olive)",
          dark: "#6E7681",
          light: "#A5B0BC",
        },
        sticky: {
          yellow: "#3D3814",
          pink: "#3D1A24",
          blue: "#143045",
          green: "#173A25",
          orange: "#3D2612",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-instrument)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        "desk-flat": "0 1px 3px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
        "desk-card": "0 4px 12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
        "desk-lift": "0 12px 28px rgba(0,0,0,0.8), 0 0 20px rgba(255,85,85,0.15), 0 0 0 1px rgba(255,85,85,0.3)",
        "sticky-peel": "4px 12px 24px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1)",
        "polaroid": "0 6px 16px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1)",
      },
      keyframes: {
        steam: {
          "0%": { opacity: "0", transform: "translateY(0) scaleX(0.8)" },
          "50%": { opacity: "0.6", transform: "translateY(-10px) scaleX(1.1)" },
          "100%": { opacity: "0", transform: "translateY(-24px) scaleX(1.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        steam: "steam 2.6s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
