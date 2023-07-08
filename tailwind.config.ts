import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme";

export default <Config> {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'accent': {
          '50': '#fcffe5',
          '100': '#f6ffc7',
          '200': '#ecff95',
          '300': '#dcfe58',
          '400': '#c9f526',
          '500': '#aadc06',
          '600': '#86b300',
          '700': '#638506',
          '800': '#4f690b',
          '900': '#42580f',
          '950': '#223201',
        },
      },
    },
    fontFamily: {
      'title': ['Capriola', 'GenJyuuGothicX', ...defaultTheme.fontFamily.sans],
      'sans': ['Nunito', 'GenJyuuGothicX', ...defaultTheme.fontFamily.sans],
      'content-sans': ['Nunito', 'GenJyuuGothicXP', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}