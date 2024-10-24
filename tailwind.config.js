/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Tailwind가 적용될 파일 경로
  ],
  theme: {
    extend: {
      colors: {
        black: "#323232",
        white: "#ffffff",
        gray: "#525252",
        primary: "#ef5e7a",
        secondary: "#fddb80",
        success: "#5ef263",
      },
    },
    fontFamily: {
      point: ["Dovemayo_gothic", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
