/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      xs: "475px",
      // => @media (min-width: 475px) { ... }
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        cream: "#f2ebe3",
        "dark-grayish-blue": "#6c7289",
        "very-dark-blue": "#1c232b",
        "dark-cyan": "#3c8067",
        "darker-cyan": "#1a4031",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      letterSpacing: {
        "extra-wide": ".4em",
      },
    },
  },
  plugins: [],
};
