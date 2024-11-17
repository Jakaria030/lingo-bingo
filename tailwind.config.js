/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077FF",
        secondary: "#FFB800",
        background: "#F8F9FA",
        txtColor: "#333333",
        accent: "#FF4C60",
        neutral: "#E5E5E5",
        success: "#28A745",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require('daisyui')],
}