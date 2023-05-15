/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/image/girl2.jpg')"
      }
    },
  },
  plugins: [],
}

