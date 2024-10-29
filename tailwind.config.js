/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Tailwind가 적용될 파일 경로
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        black: "#323232",
        white: "#ffffff",
        gray: "#525252",
        primary: "#ef5e7a",
        secondary: "#fddb80",
        success: "#5ef263",
        form: "#f1f5f9", // input, select 배경색
        category: "#ADADAD", //card의 category
        count: "#525252", //card의 방문수 배경
        review: "#F1F1F1",
        comment: "#E0E0E0",
        placeholder: "#A0A5BA",
        kakao: { DEFAULT: "#FEE500", black: "#191919" },
      },
    },
    fontFamily: {
      point: ["Dovemayo_gothic", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
