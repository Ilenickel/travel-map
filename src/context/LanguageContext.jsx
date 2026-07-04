import { createContext, useContext, useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';
import i18nInstance, { setLanguage as persistLanguage, SUPPORTED_LANGUAGES } from '../i18n';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const { user } = useAuth();
  const [language, setLanguageState] = useState(i18nInstance.language);

  // Au login, la langue enregistrée sur le profil (si présente) prime sur le
  // choix local — un utilisateur qui se connecte sur un nouvel appareil
  // retrouve sa langue plutôt que le défaut du navigateur.
  useEffect(() => {
    if (!user?.id) return;
    supabase.from('profiles').select('language').eq('id', user.id).maybeSingle()
      .then(({ data }) => {
        if (data?.language && SUPPORTED_LANGUAGES.includes(data.language) && data.language !== i18nInstance.language) {
          persistLanguage(data.language);
          setLanguageState(data.language);
        }
      });
  }, [user?.id]);

  const changeLanguage = useCallback((lang) => {
    persistLanguage(lang);
    setLanguageState(lang);
    if (user?.id) {
      supabase.from('profiles').update({ language: lang }).eq('id', user.id).then(() => {});
    }
  }, [user?.id]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
