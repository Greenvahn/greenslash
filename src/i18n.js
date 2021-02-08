import en from './translations/en.json'
import es from './translations/es.json'
import {createI18n} from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: en,
    es: es
  },
  fallbackLocale: 'en'
})

export default i18n;