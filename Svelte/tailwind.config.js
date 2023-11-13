/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.svelte',
  ],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem'
      }
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

