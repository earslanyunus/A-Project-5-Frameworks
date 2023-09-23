/** @type {import('tailwindcss').Config} */
export default {
  important:true,
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container:{
      center:true
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

