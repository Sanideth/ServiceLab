/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/hero.jpg')",
        printer: "url('/src/assets/printer.jpg')",
        printer1: "url('/src/assets/printer1.jpg')",
        printer2: "url('/src/assets/hero-1.webp')",
        service: "url('/src/assets/service1.jpg')",
        sales: "url('/src/assets/sales.jpg')",
        repair: "url('/src/assets/repair1.jpg')",
      },
      colors: {
        main: '#2281d5',
        secondary: '#ffdf00',
      },
    },
  },
  plugins: [],
};
