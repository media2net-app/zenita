/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        zenita: {
          primary: "#0d9488",
          "primary-hover": "#0f766e",
          health: "#0d9488",
          docs: "#6366f1",
        },
        crm: {
          sidebar: "#1e293b",
          "sidebar-hover": "#334155",
          content: "#f1f5f9",
          card: "#ffffff",
          "card-border": "#e2e8f0",
          accent: "#0d9488",
          "accent-light": "#ccfbf1",
        },
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        "card-crm": "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
      },
      borderRadius: {
        "ios": "12px",
        "ios-lg": "16px",
        "crm": "10px",
        "crm-lg": "14px",
      },
    },
  },
  plugins: [],
}

