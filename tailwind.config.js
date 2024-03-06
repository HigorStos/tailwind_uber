/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        uber: "url('/src/assets/bg-uber.png')",
        city: "url('/src/assets/bg-city.png')",
      },
    },
  },
  plugins: [],
};
