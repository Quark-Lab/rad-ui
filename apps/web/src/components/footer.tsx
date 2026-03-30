"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { cn } from "@/registry/web/ui";
import { RadLogo } from "./rad-logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between gap-8">
          {/* Right side (RTL): Logo + Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity"
            >
              <RadLogo size={24} />
            </Link>
            <nav className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                صفحه اصلی
              </Link>
              <Link
                href="/installation"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                نصب
              </Link>
              <Link
                href="/components"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                کامپوننت‌ها
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                درباره ما
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                تماس با ما
              </Link>
            </nav>
          </div>

          {/* Left side (RTL): Social + Copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/QuarkComponent/rad-ui"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-lg hover:bg-muted transition-colors",
                "text-muted-foreground hover:text-primary"
              )}
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <p className="text-xs text-muted-foreground">
              © {currentYear} QuarkLab
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            ساخته شده با ❤️ برای جامعه توسعه‌دهندگان ایرانی
          </p>
        </div>
      </div>
    </footer>
  );
}
