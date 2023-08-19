/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2A295B",
          "secondary": "#2D325A",
          "accent": "#25294A",
          "neutral": "#110935",
          "base-100": "#111827",
          "info": "#192037",
          "success": "#FC6673",
          "warning": "#575B7B",
          "error": "#353471",
        },
      },
    ],
  },



  theme: [{
    extend: {},
  }],
  plugins: [require("daisyui")],

}