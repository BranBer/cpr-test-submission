/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02293B",
        secondary: "#4B4FE2",
        mediumGray: "#808080",
        lightGray: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
