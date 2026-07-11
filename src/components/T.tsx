"use client";

import type { TranslationKey } from "@/src/data/translations";
import { useLanguage } from "@/src/components/LanguageProvider";

export function T({ k }: { k: TranslationKey }) {
  const { t } = useLanguage();

  return <>{t(k)}</>;
}
