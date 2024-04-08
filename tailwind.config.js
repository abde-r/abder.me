/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#76ABAE',
        third: 'rgb(148 180 189)',
      },
      fontFamily: {
        fira: ['Fira Sans'],
        open: ['Open Sans'],
        IBM: ['IBM Plex Sans Thai'],
      },
    },
  },
  plugins: [],
}