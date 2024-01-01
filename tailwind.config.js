/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "turquoise-mist": "#66E2DC",
        "sunset-blaze": "#FA7453",
        "apricot-glow": "#FFB964",
        "winter-whisper": "#FCFAF9",
        "midnight-charcoal": "#191826",
      },
      fontFamily: {
        "IBM-plex-sans": ['"IBM Plex Sans"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
};
