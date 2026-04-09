/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "#0b0120",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    },
  },
  plugins: [],
}