/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    ],
  theme: {
    extend: {
      colors: {
        "colorbg1" : "#F9F5F6",
        "colorbg2" : "#B2A4FF",
        "colorfont1" : "#537188",
        "colorfont2" : "#374259",
        "colorfont3" : "#116A7B",
      }
    },
  },
  plugins: [],
}

