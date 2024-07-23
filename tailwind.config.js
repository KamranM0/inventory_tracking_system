/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#32ADE6",
        "secondary-red": "#FA7070",
        "gray-text": "#767676",
      },
      fontFamily: { inter: ["Inter", "monospace"] },
    },
  },
  plugins: [],
};
