/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c1c",
        secondary: "#ffd232",
      }
    },

  },
  plugins: [],
}

