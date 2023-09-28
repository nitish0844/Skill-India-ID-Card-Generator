/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        IDCard: "500px",
      },
      margin: {
        IDPAdding: "500px",
      },
    },
    fontFamily: {
      LoginFont: ["REM", "sans-serif"],
    },
  },
  plugins: [],
};
