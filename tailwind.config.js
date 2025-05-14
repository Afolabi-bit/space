/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navyBg: '#070724',
        hover: "#38384F",
        outline: "#838391"
      },
      fontFamily:{
        antonio: ['Antonio', 'sans serif'],
        spartan: ['League Spartan', 'sans serif'],
      }
    },
  },
  plugins: [],
}

