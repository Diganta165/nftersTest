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
        "tertiary_color": "#371C87",
        "text_color": "#000",
        "top_collection_text_color": "#636363",
        "fluctuate_color_one": "#14C8B0",
        "fluctuate_color_two": "#FF002E",
        "background_color_one": "#F7F9FB",
        "background_color_two": "#fff",
        "category_btn_bg_color": "rgba(220, 220, 220, 0.2)",
        "highlight_green_color": "#00AC4F"


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
