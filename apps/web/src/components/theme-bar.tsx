"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { cn } from "@/registry/web/ui";
import { useThemeConfig, type ThemeName } from "./theme-context";

export function ThemeBar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme: mode, setTheme: setMode } = useTheme();
  const { theme, setTheme, themes } = useThemeConfig();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (!mounted) return null;

  const activeTheme = themes.find((t) => t.name === theme);

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
      <div className="flex items-center justify-end gap-2">
        {/* Theme Dropdown */}
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border",
              "text-xs font-medium hover:bg-muted transition-colors bg-card"
            )}
          >
            <span>تم</span>
            <div
              className="w-3 h-3 rounded-full border border-border"
              style={{ background: `hsl(${activeTheme?.primaryColor})` }}
            />
            <span>{activeTheme?.labelFA}</span>
            <ChevronDown className="w-3 h-3 text-muted-foreground" />
          </button>

          {open && (
            <div className="absolute left-0 mt-1 w-40 bg-card border border-border rounded-lg shadow-lg z-50 p-1">
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-2 w-full px-3 py-2 rounded-md text-xs transition-colors",
                    theme === t.name
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                >
                  <div
                    className="w-3 h-3 rounded-full border border-border"
                    style={{ background: `hsl(${t.primaryColor})` }}
                  />
                  <span>{t.labelFA}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Light/Dark Toggle */}
        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className={cn(
            "p-1.5 rounded-lg border border-border",
            "hover:bg-muted transition-colors bg-card"
          )}
          aria-label="تغییر حالت"
        >
          {mode === "dark" ? (
            <Sun className="w-3.5 h-3.5" />
          ) : (
            <Moon className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
