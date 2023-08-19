/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  daisyui: {
    themes: [
      "dark",
    ],
  },



  theme: [{
    extend: {},
  }],
  plugins: [require("daisyui"), require('flowbite/plugin')({
    charts: true,
  })
  ],

}