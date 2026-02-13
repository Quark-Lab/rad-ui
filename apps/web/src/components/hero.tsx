"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/web/ui";

export function Hero() {
  return (
    <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            پایه‌ای برای سیستم طراحی شما
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            مجموعه‌ای از کامپوننت‌های زیبا که می‌توانید سفارشی کنید، گسترش دهید
            و بر اساس آن بسازید. از اینجا شروع کنید و آن را مال خود کنید.
            متن‌باز. کد باز.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 pt-2"
          >
            <Link href="/installation">
              <Button className="gap-2">
                شروع کنید
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/components">
              <Button variant="outline" className="gap-2">
                <Eye className="h-4 w-4" />
                مشاهده کامپوننت‌ها
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
