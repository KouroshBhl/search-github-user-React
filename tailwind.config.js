/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans serif'],
    },
    extend: {
      colors: {
        'hero-primary': 'rgba(53, 0, 139, 1)',
      },
    },
  },
  plugins: [],
}
