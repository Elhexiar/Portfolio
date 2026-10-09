import React, { createContext, useContext, useEffect, useState } from "react";

/*
Tiny home made i18n, no library needed for 2 languages.
Usage in a component :
  const { tr } = useLanguage();
  <p>{tr({ fr: "Bonjour", en: "Hello" })}</p>
French is the default language, the choice is saved in localStorage.
*/

export type Lang = "fr" | "en";
export type Translated<T> = { fr: T; en: T };

const STORAGE_KEY = "portfolio-lang";

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    // localStorage can be blocked (private mode etc.), just use the default
  }
  return "fr";
}

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // not important if it can't be saved
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  const { lang, setLang } = context;
  const tr = <T,>(translated: Translated<T>): T => translated[lang];
  return { lang, setLang, tr };
};
