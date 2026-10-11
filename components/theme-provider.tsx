"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type ThemePreference = "light" | "dark";
type ThemeContextValue = { isDark: boolean; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextValue>({ isDark: false, toggleTheme: () => undefined });
const STORAGE_KEY = "ohhoba-theme-v31";

function applyTheme(preference: ThemePreference) {
  const isDark = preference === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  return isDark;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initial: ThemePreference = stored === "dark" ? "dark" : "light";
    setIsDark(applyTheme(initial));
  }, []);

  const toggleTheme = useCallback(() => {
    const next: ThemePreference = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(STORAGE_KEY, next);
    setIsDark(applyTheme(next));
  }, []);

  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark, toggleTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
