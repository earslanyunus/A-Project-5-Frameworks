/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem'
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

