"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@rad-ui/ui";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Right side (RTL) */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-l from-primary to-primary/60 bg-clip-text text-transparent">
              راد
            </div>
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Rad UI
            </span>
          </div>

          {/* Desktop Navigation - Left side (RTL) */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#docs"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              مستندات
            </a>
            <a
              href="/components"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              کامپوننت‌ها
            </a>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-card transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t border-border">
                <a
                  href="#docs"
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  مستندات
                </a>
                <a
                  href="#components"
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  کامپوننت‌ها
                </a>
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors w-full text-right"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="h-5 w-5" />
                        حالت روشن
                      </>
                    ) : (
                      <>
                        <Moon className="h-5 w-5" />
                        حالت تاریک
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
