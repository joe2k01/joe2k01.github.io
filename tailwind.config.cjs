/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      zIndex: {
        1: "1",
      },
      colors: {
        sazerac: {
          50: "#fff3e2",
          100: "#ffeed5",
          200: "#fedaaa",
          300: "#fdbe74",
          400: "#fb983c",
          500: "#f97a16",
          600: "#ea5f0c",
          700: "#c2470c",
          800: "#9a3812",
          900: "#7c3012",
          950: "#431607",
        },
        cinnabar: {
          50: "#fdf3f3",
          100: "#fde3e3",
          200: "#fccccc",
          300: "#f8a9a9",
          400: "#f27777",
          500: "#e74646",
          600: "#d42e2e",
          700: "#b22323",
          800: "#942020",
          900: "#7b2121",
          950: "#420d0d",
        },
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        roboto: ["'Roboto'", "sans-serif"],
        emoji: ["'Noto Color Emoji'", "sans-serif"],
        baskerville: ["'Libre Baskerville'", "serif"],
        code: ["'Source Code Pro'", "monospace"],
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /row-start-[0-9]+/,
    },
    {
      pattern: /row-end-[0-9]+/,
    },
    "z-0",
    "z-1",
  ],
};
