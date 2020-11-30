const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.gray,
      amber: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
