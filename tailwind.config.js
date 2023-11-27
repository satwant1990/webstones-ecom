/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '60': '60%',
        '66': '66%',
        '50': '50%',
        '40': '40%',
        '70': '70%',
        '75': '75%',
        '30': '30%',
        '33': '33%',
        '25': '25%',
        '20': '20%',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '1220px',
        lg: '1320px', // Custom maximum width
        xl: '1320px', // Custom maximum width
      }
    },
  },
  plugins: [],
}
