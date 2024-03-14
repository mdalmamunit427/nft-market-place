/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        brandBlue: '#4338CA',
      },
      backgroundImage: (theme) => ({
        hero: "url('../src/assets/hero.png')",
        hexagon: "url('../src/assets/hexagon.png')",
      }),
    },
  },
  plugins: [],
}

