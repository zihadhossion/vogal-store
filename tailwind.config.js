/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["Roboto", 'sans-serif']
      },
      screens: {
        'xs': '380px',
        'sm': '576px',
        'lg': '992px',
      },
    },
    keyframes: {
      scaleUp: {
        '0%': { transform: "scale(.75)", opacity: "0" },
        '100%': { transform: "scale(1)", opacity: "1" },
      },
      upDown: {
        '0%': { transform: "translate3d(0, -50%, 0)", opacity: "0" },
        '100%': { transform: "translate3d(0, 0%, 0)", opacity: "1" },
      },
      rightHide: {
        '0%': { transform: "translate(100%)", opacity: "0" },
        '100%': { transform: "translate(0)", opacity: "1" }
      },
      loading: {
        "100%": { transform: "rotate(1turn)" }
      }
    },
    animation: {
      'up-down': 'upDown 150ms linear',
      'reverse': 'loading 1s linear infinite reverse',
    }
  },
  plugins: [],
}

