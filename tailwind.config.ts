import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9b87f5",
          dark: "#7E69AB",
          light: "#D6BCFA",
        },
        secondary: {
          DEFAULT: "#F2FCE2",
          dark: "#E5DEFF",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "rotate-y": {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "100%": {
            transform: "rotateY(10deg)",
          },
        },
        "matrix-rain": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "1"
          },
          "100%": {
            transform: "translateY(100vh)",
            opacity: "0"
          }
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.8",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05)"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "rotate-y": "rotate-y 0.3s ease-out forwards",
        "matrix-rain": "matrix-rain 8s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite"
      },
      perspective: {
        "1000": "1000px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;