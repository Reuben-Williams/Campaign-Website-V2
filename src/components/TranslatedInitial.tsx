"use client";

import { useLanguage } from "@/src/components/LanguageProvider";
import type { TranslationKey } from "@/src/data/translations";

export function TranslatedInitial({ k }: { k: TranslationKey }) {
  const { t } = useLanguage();

  return <>{Array.from(t(k))[0]}</>;
}
