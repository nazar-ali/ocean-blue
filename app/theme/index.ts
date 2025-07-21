/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Indigo-600 as example, change as your brand color
      },
    },
  },
  plugins: [],
};
