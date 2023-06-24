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

          "primary": "#0083F8",

          "secondary": "#f5f5f4",

          "accent": "#4b5563",

          "neutral": "#6c7080",

          "base-100": "#080808",

          "info": "#9DC3F1",

          "success": "#059669",

          "warning": "#FBDA37",

          "error": "#e11d48",
        },
      },
    ],
  },
  theme: [{
    extend: {},
  }],
  plugins: [require("daisyui")],

}