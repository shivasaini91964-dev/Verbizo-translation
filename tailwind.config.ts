import type { Config } from "tailwindcss";

// Design tokens pulled from references/design-system.md.
// Customize the `accent` and `surface` colors per-brand for each project.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F7FB",
          dark: "#0B0B14",
        },
        ink: {
          DEFAULT: "#16161F",
          muted: "#6B6B7B",
          inverted: "#F5F5F7",
        },
        // Verbizo brand palette: indigo (primary), coral (accent), teal (secondary accent)
        accent: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
        },
        coral: {
          DEFAULT: "#FB7185",
          hover: "#F43F5E",
        },
        teal: {
          DEFAULT: "#14B8A6",
          hover: "#0D9488",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
