/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('./src/assets/banner.png')",
        bannerCart: "url('./src/assets/cart_banner.png')",
      },
    },
  },
  plugins: [],
};
