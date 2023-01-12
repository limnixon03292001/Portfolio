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
        gridSkills: 'repeat(5,minmax(20px, 110px))',
        gridContact: 'repeat(auto-fit,minmax(227px, 1fr))',
        gridProjects: 'repeat(auto-fit,minmax(370px, 1fr))',
      },
      'animation': {
        'text':'text 3s ease infinite',
    },
    'keyframes': {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
    }
    },
  },
  plugins: [],
}
