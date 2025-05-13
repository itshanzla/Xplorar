  import {initReactI18next, Translation} from 'react-i18next';
  import * as localization from 'react-native-localize';
  import i18n from 'i18next';
  import en from './src/i18nextText/English.json';
  import fr from './src/i18nextText/French.json';
  import sp from './src/i18nextText/Spanish.json';
  import ur from './src/i18nextText/Urdu.json';
  import Deutsch from './src/i18nextText/German.json';



  const languageDetector = {
    type: 'languagedetector',
    async: true,
    detect: callback => {
      const bestLanguage = localization.findBestLanguageTag(
        Object.keys(resources),
      );
      callback(bestLanguage?.languageTag || 'en');
    },
    init: () => {},
    cacheUserLanguage: () => {},
  };

  i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      fallbackLng: 'en',
      resources: {
        en: {translation: en},
        fr: {translation: fr},
        sp: {translation: sp},
        ur: {translation: ur},
        Deutsch: {translation: Deutsch},
      },
      interpolation: {
        escapeValue: false,
      },
    });
  export default i18n;
