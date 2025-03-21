"use client";

import React, { createContext, useContext, useState } from "react";
import { translations } from "../i18n/translations";

type Language = keyof typeof translations; // Ensures only valid language keys
type TranslationKeys = keyof (typeof translations)["en"]; // Ensures keys are from 'en'

interface LanguageContextType {
  language: Language;
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: TranslationKeys): string => {
    const translationSet = translations[language] as Record<string, string>; // Type assertion
    return translationSet[key] ?? key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, currentLanguage: language, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
