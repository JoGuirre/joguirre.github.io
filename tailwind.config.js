/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,tx,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#ff00f7",
        customBlue: "#00ccff",
        customOrange: "#ff9100",
      },
    },
  },
  plugins: [],
};
