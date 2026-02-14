"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { cn } from "@/registry/web/ui";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-row items-center justify-between gap-8">
          {/* Center Section: Quick Links */}
          <div className="text-center">
            <nav className="flex flex-row items-center justify-center gap-2">
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

          {/* Left Section: Social + Copyright */}
          <div className="text-left md:text-left">
            <div className="flex gap-4 mb-4 justify-start">
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
            </div>
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
