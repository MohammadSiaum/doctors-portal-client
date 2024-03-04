/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        doctortheme: {
          "primary": '#0FCFEC',
          "secondary": "#19D3AE",
          "accent": "#3A4256",
          "neutral": "#3A4256",
          "base-100": "#F6F7F9",
          
        }
      }],
  },


}

