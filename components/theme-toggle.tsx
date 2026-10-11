"use client";

import { Moon, Sun } from "lucide-react";
import { siteCopy, type SiteLocale } from "@/app/site-content";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ lang }: { lang: SiteLocale }) {
  const { isDark, toggleTheme } = useTheme();
  const copy = siteCopy[lang];
  return (
    <button
      type="button"
      className="theme-toggle icon-control"
      onClick={toggleTheme}
      aria-label={isDark ? copy.themeLight : copy.themeDark}
      aria-pressed={isDark}
      title={isDark ? copy.themeLight : copy.themeDark}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
      <span className="control-label">{isDark ? (lang === "zh" ? "浅色" : "Light") : (lang === "zh" ? "深色" : "Dark")}</span>
    </button>
  );
}
