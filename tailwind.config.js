/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg0:
          "linear-gradient(90deg, rgba(132,0,255,1) 0%, rgba(181,102,245,1) 69%, rgba(219,219,219,1) 100%);",
        heroBg1:
          "linear-gradient(90deg, rgba(8,0,255,1) 0%, rgba(104,102,245,1) 58%, rgba(219,219,219,1) 100%);",
        heroBg2:
          "linear-gradient(90deg, rgba(0,71,1,1) 0%, rgba(4,181,3,1) 48%, rgba(219,219,219,1) 100%);",
      },
    },
  },
  plugins: [],
};

