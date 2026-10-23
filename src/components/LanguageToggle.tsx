"use client";

import { useEffect, useRef, useState } from "react";
import { PiCaretDownBold, PiCheckBold } from "react-icons/pi";

import { LOCALE_COOKIE, type Locale } from "@/resources/locale";

const options: { value: Locale; label: string; short: string }[] = [
  { value: "es", label: "Español", short: "ES" },
  { value: "en", label: "English", short: "EN" },
];

/** Glass dropdown to pick the site language (Spanish is the default). */
export const LanguageToggle = ({ locale }: { locale: Locale }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = options.find((option) => option.value === locale) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    window.location.reload();
  };

  return (
    <div className="lang" ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Idioma / Language"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="lang-current">{current.label}</span>
        <span className="lang-current-short">{current.short}</span>
        <PiCaretDownBold className={open ? "lang-caret is-open" : "lang-caret"} aria-hidden="true" />
      </button>

      {open && (
        <ul className="lang-menu" role="listbox" aria-label="Idioma / Language">
          {options.map((option) => (
            <li key={option.value} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={option.value === locale}
                className={option.value === locale ? "lang-option is-selected" : "lang-option"}
                onClick={() => choose(option.value)}
              >
                {option.label}
                {option.value === locale && <PiCheckBold aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
