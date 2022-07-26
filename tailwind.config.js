/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'gothic': "Gothic A1"
      },
      colors: {
        main: {
          "red": "#F03443",
          "blue": "#254888",
          "gray": "#E9E9E7"
        },
        faded: {
          "blue": "rgb(40, 116, 252, 0.6)",
          "black": "rgba(0,0,0,0.85)",
          "white": "rgba(225,225,225,0.65)",
          "red": "#EA7973",
        }
      },
      height: {
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      gridTemplateColumns: {
        "1fr-2fr": "1fr 2fr"
      },
      backgroundImage: {
        "face-left": "url('/face-left.jpg')",
        "face-right": "url('/face-right.jpg')",
        "sir-blank": "url('/sir-blank.jpg')",
        "pkd-sit": "url('/pkd-sit.jpg')",
        "pkd-stand": "url('/pkd-stand.jpg')",
        "pkd-pocket": "url('/pkd-pocket.jpg')",
        "pkd-tilt": "url('/pkd-tilt.jpg')",
        "pkd-logo": "url('/PKD Logo.png')",
        "ug-clock": "url('/ug-clock.jpg')",
      },
      backgroundSize: {
        "50vw": "50vw",
      }
    },
  },
  plugins: [],
}
