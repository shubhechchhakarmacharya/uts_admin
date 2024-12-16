/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor : "#1F1F1F",
        secondaryColor:"#9592AB",
        tertiaryColor:"#F6F6F6",
        bg:"#f1f2f6",
        red:"#D4292E",
      },
    },
  },
  plugins: [],
}

