"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types/content';
import { contentData } from '../data/content';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof contentData['zh'];
  isZh: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Chinese ('zh') as requested in the requirements
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('mikhael_victor_lang') as Language | null;
        if (stored === 'zh' || stored === 'en') {
          return stored;
        }
      } catch {
        // localStorage may fail
      }
    }
    return 'zh';
  });

  useEffect(() => {
    try {
      document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    } catch {
      // ignore
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('mikhael_victor_lang', lang);
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    } catch {
      // fallback
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  const t = contentData[language];
  const isZh = language === 'zh';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isZh }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
