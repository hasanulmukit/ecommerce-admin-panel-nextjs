/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: "class", // enables dark mode if desired
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can extend the theme here for custom colors and fonts.
      colors: {
        primary: "#1E3A8A", // Example: a modern deep blue
        secondary: "#10B981", // Example: a fresh green
        accent: "#9333EA", // Example: a modern purple
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

