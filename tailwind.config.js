/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile-screen": "0px",
        "sm-tablet-screen": "4000px",
        "md-tablet-screen": "520px",
        "desktop-screen": "1024px",
      },
      fontFamily: {
        vazirMatn: ["vazirmatn", "sans-serif"],
      },
      colors: {
        "custom-green": "#00fa9a",
      },
      boxShadow: {
        "lighter-shadow": "2px 5px 20px rgba(0, 0, 0, 0.3)",
        "harder-shadow": "5px 10px 20px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
