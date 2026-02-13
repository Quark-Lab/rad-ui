"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeConfig } from "./theme-context";
import { cn } from "@/registry/web/ui";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme: mode, setTheme: setMode } = useTheme();
  const { theme, setTheme, themes } = useThemeConfig();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".theme-switcher-dropdown")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg w-10 h-10" />
    );
  }

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative theme-switcher-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-card transition-colors"
        aria-label="تغییر تم"
      >
        <Palette className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute left-0 mt-2 w-64 p-4",
              "bg-card border border-border rounded-xl shadow-lg",
              "z-50"
            )}
          >
            {/* Theme Selection */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-foreground mb-3">
                انتخاب تم
              </div>
              <div className="grid grid-cols-5 gap-2">
                {themes.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setTheme(t.name)}
                    className={cn(
                      "group relative aspect-square rounded-lg border-2 transition-all",
                      "hover:scale-110 hover:shadow-md",
                      theme === t.name
                        ? "border-primary shadow-md scale-105"
                        : "border-border hover:border-primary/50"
                    )}
                    aria-label={t.labelFA}
                    title={t.labelFA}
                  >
                    <div
                      className="w-full h-full rounded-md"
                      style={{
                        background: `hsl(${t.primaryColor})`,
                      }}
                    />
                    {theme === t.name && (
                      <motion.div
                        layoutId="theme-indicator"
                        className="absolute inset-0 rounded-md border-2 border-primary"
                        transition={{ type: "spring", duration: 0.3 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="text-center text-xs text-muted-foreground mt-2">
                {themes.find((t) => t.name === theme)?.labelFA}
              </div>
            </div>

            {/* Separator */}
            <div className="my-4 border-t border-border" />

            {/* Light/Dark Mode Toggle */}
            <button
              onClick={toggleMode}
              className={cn(
                "w-full flex items-center justify-between gap-2 p-2 rounded-lg",
                "hover:bg-muted transition-colors text-sm"
              )}
            >
              <span className="font-medium">
                {mode === "dark" ? "حالت روشن" : "حالت تاریک"}
              </span>
              {mode === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
