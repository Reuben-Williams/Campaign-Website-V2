"use client";

import { useLanguage } from "@/src/components/LanguageProvider";

export function LanguageToggle() {
  const { locale, t, toggleLocale } = useLanguage();
  const labelKey = locale === "en" ? "language.toggleToSpanish" : "language.toggleToEnglish";
  const nextLanguage = locale === "en" ? "ES" : "EN";

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={toggleLocale}
      aria-label={t(labelKey)}
      title={t(labelKey)}
    >
      {nextLanguage}
    </button>
  );
}
