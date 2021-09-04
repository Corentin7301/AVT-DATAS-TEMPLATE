module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './src/assets/tailwindPerso.css',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightColor: '#F5F5F5',
        darkColor: '#2D2D2D',
        alpineBlue: '#7DC1D2',
        vitePurple: '#BD34FE',
        tailwind: '#16BDCA'
      },
      fontFamily: {
        montserrat: ['montserrat']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
