/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#080711",
          secondary: "#100D1D",
          card: "#141126",
        },
        brand: {
          purple: "#782BFF",
          violet: "#A855F7",
          deep: "#4C16B8",
          neon: "#B5FF45",
          white: "#FFFFFF",
          muted: "#D5D0E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-subtle": "0 4px 20px 0 rgba(120, 43, 255, 0.12)",
        "purple-glow": "0 0 25px -5px rgba(120, 43, 255, 0.4)",
        "neon-glow": "0 0 15px -3px rgba(181, 255, 69, 0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

