import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Azeer brand palette
        navy: {
          DEFAULT: "#0D2043",
          light: "#16305F",
          deep: "#091733",
        },
        purple: {
          DEFAULT: "#7C64FE",
          dark: "#5B43D6",
          light: "#9B85FF",
        },
        lavender: {
          DEFAULT: "#F2F0FF",
          deep: "#E7E3FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-vazir)", "system-ui", "sans-serif"],
        ar: ["var(--font-vazir)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "10px",
        "2xl": "16px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(13, 32, 67, 0.05)",
        sm: "0 1px 3px 0 rgba(13, 32, 67, 0.08), 0 1px 2px -1px rgba(13, 32, 67, 0.06)",
        md: "0 4px 6px -1px rgba(13, 32, 67, 0.10), 0 2px 4px -2px rgba(13, 32, 67, 0.08)",
        lg: "0 10px 15px -3px rgba(13, 32, 67, 0.10), 0 4px 6px -4px rgba(13, 32, 67, 0.10)",
        purple: "0 8px 24px -6px rgba(124, 100, 254, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.23, 1, 0.32, 1) both",
        "pulse-dot": "pulseDot 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
