/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}", // Make sure this path matches where your files are
  ],
  theme: {
    extend: {
      height: {
        fit: "fit-content",
      },
      maxHeight: {
        300: "300px",
      },
      colors: {
        customText: "#FFFAE2",
        customSvg: "#BB945C",
      },
    },
  },
  plugins: [],
};
