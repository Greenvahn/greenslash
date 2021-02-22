import en from './translations/en.json'
import es from './translations/es.json'
import {createI18n} from 'vue-i18n'

const allowedLanguages = ['en', 'es'];

// Retrieves the default language based on the URL
// * If URL is not valid => sets language to english
const languageDetector = () => {
  let i18lang = 'en';
  let URL_lang = window.location.pathname;
  // If window URL is NOT on the root
  if(URL_lang !== '/') {
    URL_lang = URL_lang.match(/\/([^/]+)/); // Regex to capture the characters after the first slash
    allowedLanguages.includes(URL_lang[1]) ? i18lang = URL_lang[1].toString() : i18lang;
  }
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