/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.jsx"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "400px" },

      xs: { max: "390px" },
    },
  },
  plugins: [],
};
