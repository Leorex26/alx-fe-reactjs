/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // New way to specify purge paths
  theme: {
    extend: {},
  },
  plugins: [],
};
