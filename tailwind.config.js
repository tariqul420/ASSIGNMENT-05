/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'nav-bar': 'rgb(249, 247, 243)',
        'primary': 'rgb(180, 244, 97)',
        'dark-01': 'rgb(17, 17, 17)',
        'dark-02': 'rgb(17, 17, 17, 0.7)',
        'dark-03': 'rgb(17, 17, 17, 0.4)',
        'button': '#1111110d'
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

