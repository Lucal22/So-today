module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/container/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        darknav: '#161b22',
        darkbg: '#0d1117',
        darktxt: '#c9d1d9',
      },
      gridTemplateColumns: {
        sections: '3fr, 1fr',
        posts: '245px, 1fr',
        mobile: '160px, 1fr',
      },
      screens: {
        banners: '880px',
        tablets: '485px',
        mobile: '325px',
      },
    },
  },
  plugins: [],
};
