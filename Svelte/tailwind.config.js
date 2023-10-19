/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.svelte',
  ],
  theme: {
    container:{
      center:true
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

