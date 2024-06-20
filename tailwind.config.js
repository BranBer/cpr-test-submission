/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02293B",
        primaryLight: "#02293B",
        secondary: "#4B4FE2",
        secondaryLight: "#8588e6",
        mediumGray: "#808080",
        lightGray: "#EEEEEE",
      },
      height: {
        question: "90px",
        progress: "8px",
        questions: "calc(100% - 8px)",
        button: "41px",
        "500px": "500px",
      },
      fontSize: {
        score: "150px",
        choice: "14px",
        button: "14px",
      },
      fontWeight: {
        button: "600",
      },
      transitionProperty: {
        width: "width",
      },
      padding: {
        button: "10px 18px 10px 18px",
        content: "0 40px 0 40px",
        questions: "30px 0 0 0",
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
      gridTemplateColumns: {
        choice: "repeat(2, 1fr)",
      },
      gridTemplateRows: {
        choice: "repeat(2, 130px)",
      },
    },
  },
  plugins: [],
};
