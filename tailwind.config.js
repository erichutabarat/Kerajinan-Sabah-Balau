/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    ],
  theme: {
    extend: {
      colors: {
        "colorbg1" : "#FFB4B4",
        "colorbg2" : "#B2A4FF",
        "colorfont1" : "#537188",
        "colorfont2" : "#374259",
        "colorfont3" : "#116A7B",
      }
    },
  },
  plugins: [],
}

