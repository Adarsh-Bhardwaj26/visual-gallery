/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        finlandica: ['Finlandica Headline', 'sans-serif'],
        iosevka: ['Iosevka Charon Mono', 'monospace'],
        opensans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },

  plugins: [],
}