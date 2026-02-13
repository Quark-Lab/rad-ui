"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn, Button, Badge } from "@/registry/web/ui";
import { componentCategories } from "@/lib/component-categories";
import { ArrowLeft } from "lucide-react";

export default function ComponentsPage() {
  const totalComponents = componentCategories.reduce(
    (acc, cat) => acc + cat.components.length,
    0
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4" variant="secondary">
            {totalComponents} کامپوننت
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            کامپوننت‌های راد
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            کامپوننت‌های آماده، قابل تنظیم و دسترسی‌پذیر برای ساخت رابط‌های
            کاربری مدرن با پشتیبانی کامل از RTL
          </p>
        </motion.div>

        {/* Components by Category */}
        <div className="space-y-16">
          {componentCategories.map((category, catIndex) => (
            <motion.section
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-3xl font-bold">{category.categoryFA}</h2>
                  <Badge variant="outline">
                    {category.components.length} کامپوننت
                  </Badge>
                </div>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>

              {/* Components Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.components.map((component, index) => {
                  const Icon = component.icon;
                  return (
                    <motion.div
                      key={component.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: catIndex * 0.1 + index * 0.05,
                      }}
                    >
                      <Link
                        href={component.href}
                        className={cn(
                          "group block h-full p-6 rounded-xl",
                          "bg-card border-2 border-border",
                          "hover:border-primary hover:shadow-xl",
                          "transition-all duration-300",
                          "relative overflow-hidden"
                        )}
                      >
                        {/* Hover Effect Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Icon & Title */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-3 flex-1">
                              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <div className="flex-1 text-right">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                  {component.nameFA}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {component.name}
                                </p>
                              </div>
                            </div>
                            <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-[-4px] transition-all" />
                          </div>

                          {/* Description */}
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {component.description}
                          </p>

                          {/* View Button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full group-hover:bg-primary/10"
                          >
                            مشاهده مستندات
                          </Button>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-12"
        >
          <h2 className="text-2xl font-bold mb-4">آماده شروع هستید؟</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            با نصب راد، می‌توانید این کامپوننت‌ها را در پروژه خود استفاده کنید
          </p>
          <Link href="/installation">
            <Button size="lg" className="gap-2">
              راهنمای نصب
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
