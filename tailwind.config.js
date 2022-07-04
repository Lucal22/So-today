module.exports = {
  darkMode: 'class',
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/container/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        darknav: '#161b22',
        darkbg: '#0d1117',
        darktxt: '#c9d1d9',
      }
    },

  },
  plugins: [],
}
