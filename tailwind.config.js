/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.ts"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
