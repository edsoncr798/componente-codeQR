/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white: 'hsl(var(--white) / <alpha-value>)',
        light: 'hsl(var(--light-gray) / <alpha-value>)',
        Grayishblue: 'hsl(var(--grayish-blue) / <alpha-value>)',
        Darkblue: 'hsl(var(--dark-blue) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}

