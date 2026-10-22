"use client";

import { Row, ToggleButton } from "@once-ui-system/core";

import { LOCALE_COOKIE, type Locale } from "@/resources/locale";

const options: { value: Locale; label: string }[] = [
  { value: "es", label: "ES" },
  { value: "en", label: "EN" },
];

export const LanguageToggle = ({ locale }: { locale: Locale }) => {
  const change = (next: Locale) => {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    window.location.reload();
  };

  return (
    <Row gap="2" vertical="center">
      {options.map((option) => (
        <ToggleButton
          key={option.value}
          label={option.label}
          selected={locale === option.value}
          onClick={() => change(option.value)}
        />
      ))}
    </Row>
  );
};
