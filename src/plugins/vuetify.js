import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/i18n'
import '@/sass/overrides.sass'

Vue.use(Vuetify)

const theme = {
  primary: '#4CAF50',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3',
  filterPatchBgColor: '#285D7B',
  statsPatchBgColor: '#9cc96b',
  graphPatchBgColor: '#ebaa4b',
  lightBlue: '#4ebcda', // rgb(78,188,218)
  lightGreen: '#9cc96b', // rgb(156,201,107)
  lightOrange: '#ebaa4b', // rgb(235,170,75)
}

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
