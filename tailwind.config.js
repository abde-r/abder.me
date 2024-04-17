/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b5cabf',
        secondary: '#9cbbd1',
        third: 'rgb(148 180 189)',
      },
      fontFamily: {
        fira: ['Fira Sans'],
        open: ['Open Sans'],
        IBM: ['IBM Plex Sans Thai'],
      },
      screens: {
        sm: '280px',
        bsm: '380px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}