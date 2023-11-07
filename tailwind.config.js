/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D1D1D",
        secondary: "#2E2E2E",
        tertiary: "#111111",
        accent: "#E3B748",
      },
    },
  },
  plugins: [],
};
