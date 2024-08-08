/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans Variable"', "sans-serif"],
        alice: ['"Alice"', "serif"],
      },
      screens: {
        "3xl": "2000px",
      },
      colors: {
        geraldine: {
          50: "#fdf3f3",
          100: "#fde4e3",
          200: "#fccecc",
          300: "#f8aca9",
          400: "#f27f7a",
          500: "#e7524c",
          600: "#d4352e",
          700: "#b22923",
          800: "#932621",
          900: "#7a2622",
          950: "#420f0d",
        },
        "carrot-orange": {
          50: "#fffaeb",
          100: "#fdf1c8",
          200: "#fce08b",
          300: "#faca4f",
          400: "#f9b426",
          500: "#f39512",
          600: "#d76d08",
          700: "#b24b0b",
          800: "#913a0f",
          900: "#773010",
          950: "#441704",
        },
      },
    },
  },
  plugins: [],
};
