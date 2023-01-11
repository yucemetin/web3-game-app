/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 1000px 1px #000 inset;',
      }
    },
    screens: {
      'med': '1330px',
      'smed': '1210px',
      'xmed': '1110px',
      'sma': '1070px',
      'xsma': '960px',
      'xxsma': '840px',
      '3xsma': '700px',
      'mb': '575px',
      
    },
  },
  plugins: [],
}
