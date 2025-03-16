/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Specify files for purge
  darkMode: "media", // Enables dark mode using the 'class' strategy
  theme: {
    extend: {},
  },
  variants: { // Not needed in Tailwind v3, but added for compatibility
    extend: {},
  },
  plugins: [],
};
