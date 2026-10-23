"use client";

import React, { useEffect, useState } from "react";
import { PiMoonStarsFill, PiSunFill } from "react-icons/pi";
import { useTheme } from "@once-ui-system/core";

/** Sliding switch: yellow with a sun in light mode, blue with a moon in dark mode. */
export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, [theme]);

  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo oscuro" : "Modo claro"}
      className={isDark ? "theme-switch is-dark" : "theme-switch is-light"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <PiSunFill className="theme-switch-icon theme-switch-sun" aria-hidden="true" />
      <PiMoonStarsFill className="theme-switch-icon theme-switch-moon" aria-hidden="true" />
      <span className="theme-switch-knob" />
    </button>
  );
};
