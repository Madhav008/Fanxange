/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  daisyui: {
    themes: [
      {
        'dark': {
          'primary': '#BD3DF4',
          'primary-focus': '#2A295B',
          'primary-content': '#ffffff',

          'secondary': '#25294A',
          'secondary-focus': '#2A295B',
          'secondary-content': '#ffffff',

          'accent': '#37cdbe',
          'accent-focus': '#2ba69a',
          'accent-content': '#ffffff',

          'neutral': '#2a2e37',
          'neutral-focus': '#16181d',
          'neutral-content': '#ffffff',

          'base-100': '#2D325A',
          'base-200': '#25294A',
          'base-300': '#3a3982',
          'base-content': '#ebecf0',

          'info': '#FD7270',
          'success': '#87cf3a',
          'warning': '#e1d460',
          'error': '#ff6b6b',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
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