/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '7/10': '70%',
        '25/40': '62.5%'
      },
    },
  },
  plugins: [],
}