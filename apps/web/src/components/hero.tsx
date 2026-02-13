"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { cn } from "@/registry/web/ui";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="block">طراحی اصیل.</span>
            <span className="block bg-gradient-to-l from-primary to-primary/60 bg-clip-text text-transparent">
              عملکرد جسورانه.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            کتابخانه رابط کاربری برای React و React Native با طعم معماری
            ایرانی.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#get-started"
              className={cn(
                "inline-flex items-center justify-center gap-2",
                "px-8 py-3 rounded-lg font-medium",
                "bg-primary text-primary-foreground",
                "hover:bg-primary/90 transition-colors",
                "shadow-lg shadow-primary/20",
                "text-base"
              )}
            >
              شروع کنید
              <ArrowLeft className="h-4 w-4" />
            </a>
            <a
              href="#install"
              className={cn(
                "inline-flex items-center justify-center gap-2",
                "px-8 py-3 rounded-lg font-medium",
                "border-2 border-border",
                "hover:bg-card transition-colors",
                "text-base"
              )}
            >
              <Download className="h-4 w-4" />
              نصب کنید
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

