const colors = require('./src/color/colors')

module.exports = {
  darkMode: 'class', //夜間模式
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: true,
  },
  content: {
    relative: true,
    files: [
      './app/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    colors: {
      // 在這裡建立你的調色盤
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      green: colors.green,
      purple: colors.purple,
      blue: colors.blue,
      amber: colors.amber,
      teal: colors.teal,
      orange: colors.orange
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // }
  }
}