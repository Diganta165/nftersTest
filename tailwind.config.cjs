/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",

    // './pages/**/*.{html,jsx}',
    // './components/**/*.{html,jsx}',
    
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        // "primary_color": rgba(61, 0, 183, 1),
        "primary-color": "#3d00b7",
        "secondary_color": "#fff",
        "text_color": "#000",
      },
      
    },
  },
  plugins: [],
}
