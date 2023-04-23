/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#e5af48"
      },
      transitionProperty: {
        "size": "width, height",
        "spacing": "margin, padding",
      },
    },
  },
  plugins: [],
}