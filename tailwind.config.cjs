/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontMain: ['Montserrat', 'sans-serif'],
      },
      gridTemplateColumns:{
        gridSkills: 'repeat(auto-fit,minmax(125px, 1fr))',
        gridContact: 'repeat(auto-fit,minmax(227px, 1fr))',
        gridProjects: 'repeat(auto-fit,minmax(370px, 1fr))',
      }
    },
  },
  plugins: [],
}