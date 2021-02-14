import en from './translations/en.json'
import es from './translations/es.json'
import {createI18n} from 'vue-i18n'

const allowedLanguages = ['en', 'es'];

// Retrieves the default language based on the URL
// * If URL is not valid => sets language to english
const languageDetector = () => {
  const URL_lang = window.location.pathname.split('/').pop();
  let i18lang = 'en';
  allowedLanguages.includes(URL_lang) ? i18lang = URL_lang.toString() : i18lang;
  return i18lang;
}

// Init i18n
const i18n = createI18n({
  locale: languageDetector(),
  messages: {
    en: en,
    es: es
  },
  fallbackLocale: 'en'
});

export default i18n;