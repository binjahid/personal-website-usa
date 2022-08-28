/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Quicksand, sans-serif",
        secondary: "Poppins, sans-serif",
        tertiary: "Cabin, sans-serif",
      },
      screens: {
        navBreak: "768px",
      },
    },
    container: {
      padding: "1rem",
    },
  },
  plugins: [],
};
