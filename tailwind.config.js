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
      transitionProperty: {
        width: "width",
      },
      padding: {
        button: "10px 18px 10px 18px",
      },
      borderRadius: {
        button: "30px",
      },
      borderWidth: {
        choice: "1px",
        selectedChoice: "3px",
      },
      margin: {
        choice: "3px",
        selectedChoice: "1px",
      },
    },
  },
  plugins: [],
};
