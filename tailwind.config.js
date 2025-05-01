/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy-Medium', 'sans-serif'],
      },
      screens: {
        xs: "375px", // Extra Small Screens (Phones)
        sm: "640px", // Small Screens (Default Tailwind)
        md: "768px", // Medium Screens (Default Tailwind)
        lg: "1024px", // Large Screens (Default Tailwind)
        xl: "1280px", // Extra Large Screens (Default Tailwind)
        "2xl": "1536px", // 2X Large Screens (Default Tailwind)
        custom: "900px", // Custom Screen Example
      },
    },
  },
  plugins: [],
};
