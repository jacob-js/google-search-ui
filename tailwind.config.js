/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': "'Roboto', sans-serif"
      },
      width: {
        'like-full': '90%',
        '10v': '100vh',
        '8v': '80vh'
      },
      height: {
        '10v': '100vh',
        '8v': '80vh'
      },
      minHeight: {
        '10v': '100vh',
        '8v': '80vh'
      },
      minWidth: {
        'like-full': '90%',
        '10v': '100vh',
        '8v': '80vh'
      },
      padding: {
        '2.5': 'calc(1rem - 6px)'
      }
    },
  },
  plugins: [],
}
