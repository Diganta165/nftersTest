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
        "primary_color": "#3d00b7",
        "secondary_color": "#fff",
        "text_color": "#000",
        "top_collection_text_color": "#636363",
        "fluctuate_color_one": "#14C8B0",
        "fluctuate_color_two": "#FF002E",

      },
      fontFamily:{
        "integral" : ["integral"],
        "dmSans": ["DM Sans"],
        "popins": ["Poppins"]
      }
      
    },
  },
  plugins: [],
}
