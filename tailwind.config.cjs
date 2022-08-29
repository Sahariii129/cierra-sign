/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#01182F",
      secondary: "#F35627",
      lightblue: "#D9E2EC",
      darkblue: "#9FB3C8",
      secondaryVariant: "#FFD0B5",
      primaryVariant: "#486581",
      white: "#ffffff",
      blue: "#BCCCDC",
      lightgrey: "#F0F4F8",
      dark: "#243B53",
      red : "#D2042D"
    }
  },
  plugins: [],
}