"use client";

import { useLanguage } from "@/src/components/LanguageProvider";

const options = [
  { value: "canvassing", key: "volunteer.optionCanvassing" },
  { value: "phone", key: "volunteer.optionPhone" },
  { value: "hosting", key: "volunteer.optionHosting" },
  { value: "digital", key: "volunteer.optionDigital" },
] as const;

export function VolunteerInterestSelect() {
  const { t } = useLanguage();

  return (
    <select id="interest">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {t(option.key)}
        </option>
      ))}
    </select>
  );
}
