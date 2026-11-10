/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Shared Brand Colors
        brand: {
          violet: "#635BFF",
          blue: "#3984FF",
          cyan: "#20C5D8",
          DEFAULT: "#635BFF",
        },
        // Theme Colors
        theme: {
          bg: "var(--theme-bg)",
          section: "var(--theme-section)",
          card: "var(--theme-card)",
          text: "var(--theme-text-primary)",
          secondary: "var(--theme-text-secondary)",
          border: "var(--theme-border)",
        },
        // Exact Palettes
        pingo: {
          light: {
            bg: "#FFFFFF",
            section: "#F5F6FF",
            card: "#F5F6FA",
            text: "#171B2E",
            secondary: "#62677D",
            border: "#E5E7F0",
          },
          dark: {
            bg: "#0B0D19",
            section: "#101326",
            card: "#171A2E",
            text: "#FFFFFF",
            secondary: "#B5BAD0",
            border: "#292D45",
          },
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(99, 91, 255, 0.4)",
        "glow-cyan": "0 0 20px -3px rgba(32, 197, 216, 0.35)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
        "card-dark": "0 12px 35px -10px rgba(0, 0, 0, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
