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