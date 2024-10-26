/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ranch: ["Rancho", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
