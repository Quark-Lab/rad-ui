"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Menu,
  MousePointer2,
  Minus,
  User,
  RectangleHorizontal,
  Keyboard,
  BadgeCheck,
  Tag,
  Loader,
  BoxSelect,
  ToggleLeft,
  ToggleRight,
  TextCursorInput,
  Power,
  SlidersHorizontal,
  CheckSquare,
  CircleDot,
  ChevronDown,
} from "lucide-react";
import { cn } from "@rad-ui/ui";

// Component list configuration
const componentCategories = [
  {
    category: "Form",
    components: [
      {
        name: "Button",
        nameFA: "دکمه",
        href: "/components/button",
        icon: MousePointer2,
      },
      {
        name: "Label",
        nameFA: "برچسب",
        href: "/components/label",
        icon: Tag,
      },
      {
        name: "Toggle",
        nameFA: "دکمه دوحالته",
        href: "/components/toggle",
        icon: ToggleLeft,
      },
      {
        name: "Toggle Group",
        nameFA: "گروه دکمه دوحالته",
        href: "/components/toggle-group",
        icon: ToggleRight,
      },
      {
        name: "Input",
        nameFA: "ورودی متن",
        href: "/components/input",
        icon: TextCursorInput,
      },
      {
        name: "Native Select",
        nameFA: "انتخابگر بومی",
        href: "/components/native-select",
        icon: ChevronDown,
      },
      {
        name: "Textarea",
        nameFA: "ناحیه متن",
        href: "/components/textarea",
        icon: TextCursorInput,
      },
      {
        name: "Switch",
        nameFA: "سوئیچ",
        href: "/components/switch",
        icon: Power,
      },
      {
        name: "Slider",
        nameFA: "اسلایدر",
        href: "/components/slider",
        icon: SlidersHorizontal,
      },
      {
        name: "Checkbox",
        nameFA: "چک‌باکس",
        href: "/components/checkbox",
        icon: CheckSquare,
      },
      {
        name: "Radio Group",
        nameFA: "دکمه رادیویی",
        href: "/components/radio-group",
        icon: CircleDot,
      },
    ],
  },
  {
    category: "Layout",
    components: [
      {
        name: "Aspect Ratio",
        nameFA: "نسبت تصویر",
        href: "/components/aspect-ratio",
        icon: RectangleHorizontal,
      },
      {
        name: "Separator",
        nameFA: "جداکننده",
        href: "/components/separator",
        icon: Minus,
      },
    ],
  },
  {
    category: "Display",
    components: [
      {
        name: "Avatar",
        nameFA: "آواتار",
        href: "/components/avatar",
        icon: User,
      },
      {
        name: "Badge",
        nameFA: "نشان",
        href: "/components/badge",
        icon: BadgeCheck,
      },
      {
        name: "Kbd",
        nameFA: "صفحه‌کلید",
        href: "/components/kbd",
        icon: Keyboard,
      },
      {
        name: "Skeleton",
        nameFA: "اسکلتون",
        href: "/components/skeleton",
        icon: BoxSelect,
      },
      {
        name: "Spinner",
        nameFA: "اسپینر",
        href: "/components/spinner",
        icon: Loader,
      },
    ],
  },
];

interface ComponentsSidebarProps {
  className?: string;
}

export function ComponentsSidebar({ className }: ComponentsSidebarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-bold">کامپوننت‌ها</h2>
        <p className="text-sm text-muted-foreground mt-1">Components</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {componentCategories.map((category) => (
            <div key={category.category}>
              <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {category.category}
              </h3>
              <div className="space-y-1">
                {category.components.map((component) => {
                  const Icon = component.icon;
                  const isActive = pathname === component.href;

                  return (
                    <Link
                      key={component.href}
                      href={component.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg",
                        "text-sm font-medium transition-colors",
                        "hover:bg-muted",
                        isActive
                          ? "bg-primary/10 text-primary hover:bg-primary/15"
                          : "text-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <div className="flex-1 flex items-center justify-between">
                        <span>{component.nameFA}</span>
                        <span
                          className="text-xs text-muted-foreground"
                          dir="ltr"
                        >
                          {component.name}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <Link
          href="/"
          className="block text-sm text-muted-foreground hover:text-foreground transition-colors text-center"
        >
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="md:hidden fixed top-20 right-4 z-40 p-2 rounded-lg bg-card border border-border shadow-lg hover:bg-muted transition-colors"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:block w-72 border-l border-border bg-card/50",
          "sticky top-0 h-screen overflow-hidden",
          className
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-card border-l border-border z-50 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 left-4 p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>

              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
