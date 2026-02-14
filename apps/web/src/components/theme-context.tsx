"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeName = "kahgel" | "firouzeh" | "lajvard" | "puste" | "anar";

export interface ThemeInfo {
  name: ThemeName;
  label: string;
  labelFA: string;
  primaryColor: string; // HSL value for preview
}

export const themes: ThemeInfo[] = [
  {
    name: "firouzeh",
    label: "Firouzeh",
    labelFA: "فیروزه",
    primaryColor: "174 72% 40%",
  },
  {
    name: "kahgel",
    label: "Kahgel",
    labelFA: "کاهگل",
    primaryColor: "35 55% 51%",
  },
  {
    name: "lajvard",
    label: "Lajvard",
    labelFA: "لاجورد",
    primaryColor: "225 75% 45%",
  },
  {
    name: "puste",
    label: "Puste",
    labelFA: "پسته",
    primaryColor: "95 55% 38%",
  },
  {
    name: "anar",
    label: "Anar",
    labelFA: "انار",
    primaryColor: "348 75% 42%",
  },
];

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: ThemeInfo[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeConfigProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("firouzeh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("rad-ui-theme") as ThemeName;
    if (savedTheme && themes.find((t) => t.name === savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply theme class to document element
    const root = document.documentElement;
    
    // Remove all theme classes
    themes.forEach((t) => {
      root.classList.remove(`theme-${t.name}`);
    });

    // Add current theme class (except for default firouzeh which is in :root)
    if (theme !== "firouzeh") {
      root.classList.add(`theme-${theme}`);
    }

    // Save to localStorage
    localStorage.setItem("rad-ui-theme", theme);
  }, [theme, mounted]);

  const setTheme = (newTheme: ThemeName) => {
    // Apply theme class immediately (synchronously)
    const root = document.documentElement;
    
    // Remove all theme classes
    themes.forEach((t) => {
      root.classList.remove(`theme-${t.name}`);
    });

    // Add current theme class (except for default firouzeh which is in :root)
    if (newTheme !== "firouzeh") {
      root.classList.add(`theme-${newTheme}`);
    }

    // Update state
    setThemeState(newTheme);
    
    // Save to localStorage
    localStorage.setItem("rad-ui-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeConfig() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeConfig must be used within a ThemeConfigProvider");
  }
  return context;
}
