/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        zenita: {
          primary: "#2563eb",
          health: "#16a34a",
          docs: "#7c3aed"
        }
      }
    },
  },
  plugins: [],
}

