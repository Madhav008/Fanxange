/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/Components/**/*.{js,jsx,ts,tsx}',
    './src/Pages/**/*.{js,jsx,ts,tsx}',
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