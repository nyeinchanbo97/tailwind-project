/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  content: ["./src/**/*.{html,js}","./node","./node_modules/flowbite/**/*.js"],
  darkMode: "class",

  theme: {
    extend: {

    colors:{
      "primary": "#f4e285",
      "secondary": "black",
    },

    },
  },
  plugins: [],
}

