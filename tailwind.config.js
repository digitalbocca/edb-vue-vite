/** @type {import('tailwindcss').Config} */

import animated from 'tailwindcss-animated'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    animated
  ]
}
