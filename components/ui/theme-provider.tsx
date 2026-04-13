"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const storageKey = "brandium-theme";

function getDomTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getDomTheme);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setThemeState(getDomTheme());
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const setTheme = useCallback((nextTheme: Theme) => {
    document.documentElement.classList.add("theme-switching");
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
    setThemeState(nextTheme);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-switching");
    }, 320);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
    }),
    [theme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
