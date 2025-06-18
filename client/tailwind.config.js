/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ef4444', // customize as needed
        'primary-dull': '#dc2626',
      },
    },
  },
  plugins: [],
}
