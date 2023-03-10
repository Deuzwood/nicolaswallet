/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#e5af48",
        "secondary": "#1c162b",
      },
      transitionProperty: {
        "size": "width, height",
        "spacing": "margin, padding",
      },
    },
  },
  plugins: [],
}