module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('http://localhost:3000/images/hero-pattern.png')",
        'hugs': "url('http://localhost:3000/images/hugs.png')",
      }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
