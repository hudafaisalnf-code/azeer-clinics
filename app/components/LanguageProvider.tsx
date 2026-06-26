"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { translations, Lang } from "@/lib/translations";

type Dict = (typeof translations)[Lang];

interface LanguageContextValue {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: Dict;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  // Load saved preference on mount
  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem("azeer-lang") as Lang | null)
        : null;
    if (saved === "ar" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  // Persist + reflect on <html>
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("azeer-lang", lang);
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);
  const toggleLang = () => setLangState((p) => (p === "ar" ? "en" : "ar"));

  const value: LanguageContextValue = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    t: translations[lang],
    toggleLang,
    setLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
