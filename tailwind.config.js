/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "g1": "#BFFF8D",
        "gsecond": "#014B38",
        "red": "#FF7664",
        "yellow": "#F6CE34",
        "purple": "#9167F1",
        "wh": "#ffff",
        "blck": "#000000",
        "grey": "#E0E0E0",
      },
      fontFamily:{
        "mango": ["MangoGrotesque", "sans-serif"]
      }
    },
  },
  plugins: [],
};
