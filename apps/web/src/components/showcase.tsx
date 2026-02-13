"use client";

import { motion } from "framer-motion";
import { Languages, Code, Palette } from "lucide-react";
import { cn, Button } from "@/registry/web/ui";
import Link from "next/link";

const features = [
  {
    title: "RTL Native",
    description: "پشتیبانی کامل از راست‌به‌چپ از ابتدا طراحی شده است",
    icon: Languages,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Shared Logic",
    description: "منطق مشترک بین وب و موبایل برای توسعه سریع‌تر",
    icon: Code,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Persian Aesthetics",
    description: "طراحی الهام‌گرفته از معماری و زیبایی‌شناسی ایرانی",
    icon: Palette,
    gradient: "from-primary/20 to-primary/5",
  },
];

const components = [
  {
    name: "Button",
    href: "/components/button",
    description: "دکمه‌های قابل تنظیم با چندین نوع و اندازه",
  },
];

export function Showcase() {
  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              چرا راد؟
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              یک کتابخانه کامل با تمام ابزارهای مورد نیاز برای ساخت رابط‌های
              کاربری مدرن
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "relative p-6 rounded-xl",
                    "bg-card border border-border",
                    "hover:shadow-lg transition-all duration-300",
                    "group"
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 rounded-xl bg-gradient-to-br",
                      feature.gradient,
                      "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    )}
                  />
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="components">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              کامپوننت‌ها
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              کامپوننت‌های آماده برای استفاده در پروژه‌های شما
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={component.href}
                  className={cn(
                    "block p-6 rounded-xl",
                    "bg-card border border-border",
                    "hover:shadow-lg hover:border-primary/50",
                    "transition-all duration-300",
                    "group"
                  )}
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {component.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {component.description}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full">
                    مشاهده مستندات
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

