/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        customTheme: {
                      primary: "#0FCFEC",
                      secondary: "#19D3AE",     
                      "base-100": "#e5e7eb",         
                      neutral: "#3A4256", 
                      accent: "#fae8ff"         
                      
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}
