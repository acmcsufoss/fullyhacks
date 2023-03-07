const { transform } = require('typescript')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': {
            transform: 'translateX(0)',
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateX(20%)',
            transform: 'translateY(20%)'
          },
          '100%': {
            transform: 'translateX(0)',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        float: 'float 3s infinite ease-in-out'
      },
      fontSize: {
        md: '1.25rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3.5rem'
      },
      fontFamily: {
        rubik: ['Rubik']
      },
      colors: {
        sky_100: '#ABE1FF',
        sky_300: '#18AAFF',
        blue_300: '#385DDF',
        purple_300: '#9EA8FF',
        purple_hover: '#3b3561',
        purple_500: '#4F38DF',
        pink_700: '#B438DF',
        pink_400: '#FF8F8F',
        pink_300: '#DF389C',
        pink_100: '#FFABCE',
        orange_300: '#FFC985',
        orange_100: '#FFEDCC'
      },
      textColor: {
        purple_main: '#340B67',
        purple_main_hover: '#b49fcc'
      },
      backgroundColor: {
        body_bg: '#FFFAF1'
      },
      screens: {
        md: '700px'
      }
    }
  },
  plugins: [require('daisyui')]
}
