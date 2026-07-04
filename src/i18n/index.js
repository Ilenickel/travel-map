import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonFr from './locales/fr/common.json';
import commonEn from './locales/en/common.json';
import planningFr from './locales/fr/planning.json';
import planningEn from './locales/en/planning.json';

export const STORAGE_KEY = 'triply_language';
export const SUPPORTED_LANGUAGES = ['fr', 'en'];

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'fr';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return SUPPORTED_LANGUAGES.includes(stored) ? stored : 'fr';
}

i18n.use(initReactI18next).init({
  resources: {
    fr: { common: commonFr, planning: planningFr },
    en: { common: commonEn, planning: planningEn },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'fr',
  ns: ['common', 'planning'],
  defaultNS: 'planning',
  interpolation: { escapeValue: false },
});

// Change la langue active + persiste le choix localement (indépendamment de la
// persistance profil, gérée par LanguageContext pour un utilisateur connecté).
export function setLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.includes(lang)) return;
  i18n.changeLanguage(lang);
  if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, lang);
}

export default i18n;
