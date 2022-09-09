const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
