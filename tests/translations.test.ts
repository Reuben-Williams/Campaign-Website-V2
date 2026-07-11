import { describe, expect, it } from "vitest";

import {
  languageNames,
  navTranslationKeys,
  pageTranslationKeys,
  translationKeys,
  translations,
} from "@/src/data/translations";

describe("site translations", () => {
  it("provides English and Spanish language names", () => {
    expect(languageNames).toEqual({
      en: "English",
      es: "Español",
    });
  });

  it("has English and Spanish copy for every translation key", () => {
    for (const key of translationKeys) {
      expect(translations.en[key], key).toBeTruthy();
      expect(translations.es[key], key).toBeTruthy();
    }
  });

  it("uses distinct Spanish copy for representative visible content", () => {
    const translatedKeys = [
      "home.title",
      "home.summary",
      "about.card1.summary",
      "issues.ctaTitle",
      "volunteer.submit",
      "donate.continue",
      "footer.review",
    ] as const;

    for (const key of translatedKeys) {
      expect(translations.es[key], key).not.toBe(translations.en[key]);
    }
  });

  it("translates the main navigation into Spanish", () => {
    const spanishNav = navTranslationKeys.map((key) => translations.es[key]);

    expect(spanishNav).toEqual([
      "Inicio",
      "Temas",
      "Acerca de",
      "Eventos",
      "Voluntariado",
      "Noticias",
    ]);
  });

  it("translates every primary page title into Spanish", () => {
    const spanishTitles = pageTranslationKeys.map((key) => translations.es[key]);

    expect(spanishTitles).toContain("Progreso con raíces en la comunidad");
    expect(spanishTitles).toContain("Conoce a Carmen Morales");
    expect(spanishTitles).toContain("Nuestra visión para el futuro");
    expect(spanishTitles).toContain("Próximos eventos");
    expect(spanishTitles).toContain("Apoya la visión");
  });
});
