import React, { createContext, useContext, useState, useCallback } from 'react';

export type UILang =
  | 'id'
  | 'en'
  | 'ja'
  | 'ko'
  | 'ar'
  | 'fr'
  | 'de'
  | 'es'
  | 'zh'
  | 'ms'
  | 'th'
  | 'nl';

export const UI_LANGUAGES: { code: UILang; label: string; flag: string }[] = [
  { code: 'id', label: 'IDN', flag: '🇮🇩' },
  { code: 'en', label: 'ENG', flag: '🇬🇧' },
  { code: 'ja', label: 'JPN', flag: '🇯🇵' },
  { code: 'ko', label: 'KOR', flag: '🇰🇷' },
  { code: 'ar', label: 'ARA', flag: '🇸🇦' },
  { code: 'fr', label: 'FRA', flag: '🇫🇷' },
  { code: 'de', label: 'DEU', flag: '🇩🇪' },
  { code: 'es', label: 'ESP', flag: '🇪🇸' },
  { code: 'zh', label: 'CN', flag: '🇨🇳' },
  { code: 'ms', label: 'MAY', flag: '🇲🇾' },
  { code: 'th', label: 'THA', flag: '🇹🇭' },
  { code: 'nl', label: 'NLD', flag: '🇳🇱' },
];

interface UILanguageContextType {
  uiLang: UILang;
  setUILang: (lang: UILang) => void;
}

const UILanguageContext = createContext<UILanguageContextType | null>(null);

const STORAGE_KEY = 'gim_ui_lang';

function readStoredLang(): UILang {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return UI_LANGUAGES.some((lang) => lang.code === saved) ? (saved as UILang) : 'en';
}

export function UILanguageProvider({ children }: { children: React.ReactNode }) {
  const [uiLang, setUILangState] = useState<UILang>(readStoredLang);

  const setUILang = useCallback((lang: UILang) => {
    setUILangState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors
    }
  }, []);

  return (
    <UILanguageContext.Provider value={{ uiLang, setUILang }}>
      {children}
    </UILanguageContext.Provider>
  );
}

export function useUILanguage() {
  const ctx = useContext(UILanguageContext);
  if (!ctx) throw new Error('useUILanguage must be inside UILanguageProvider');
  return ctx;
}
