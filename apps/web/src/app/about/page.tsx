"use client";

import { motion } from "framer-motion";
import { Palette, Languages, Code, Zap, Heart, Users } from "lucide-react";
import Link from "next/link";
import { cn, Button, Badge, Separator } from "@/registry/web/ui";

const features = [
  {
    icon: Languages,
    title: "RTL-First",
    titleFA: "راست‌به‌چپ اولویت اول",
    description:
      "تمام کامپوننت‌ها از ابتدا با پشتیبانی کامل از راست‌به‌چپ طراحی شده‌اند",
  },
  {
    icon: Palette,
    title: "Persian Themes",
    titleFA: "تم‌های ایرانی",
    description: "۵ پالت رنگی زیبا با نام‌های فارسی الهام‌گرفته از فرهنگ ایران",
  },
  {
    icon: Code,
    title: "Developer Experience",
    titleFA: "تجربه توسعه‌دهنده",
    description: "CLI قدرتمند برای نصب و مدیریت آسان کامپوننت‌ها",
  },
  {
    icon: Zap,
    title: "Performance",
    titleFA: "کارایی بالا",
    description: "بهینه‌سازی شده برای سرعت و عملکرد بهتر",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="mb-4" variant="secondary">
            درباره راد
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            کتابخانه رابط کاربری
            <span className="block mt-2 bg-gradient-to-l from-primary to-primary/60 bg-clip-text text-transparent">
              با الهام از ایران
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            راد یک کتابخانه رابط کاربری متن‌باز است که با هدف ارائه کامپوننت‌های
            زیبا، دسترسی‌پذیر و قابل تنظیم با پشتیبانی کامل از زبان فارسی و
            راست‌به‌چپ ساخته شده است.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">ماموریت ما</h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                ما معتقدیم که توسعه‌دهندگان فارسی‌زبان نیاز به ابزارهایی دارند که
                با زبان و فرهنگ آن‌ها هماهنگ باشد. راد با الهام از زیبایی‌شناسی
                و معماری ایرانی، تجربه‌ای منحصر به فرد برای ساخت رابط‌های کاربری
                مدرن ارائه می‌دهد.
              </p>
              <p>
                هدف ما ساخت کتابخانه‌ای است که نه تنها زیبا و کاربردی باشد، بلکه
                احساس آشنایی و تعلق را برای توسعه‌دهندگان ایرانی به همراه داشته
                باشد.
              </p>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16" />

        {/* Features Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            ویژگی‌های کلیدی
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={cn(
                    "p-6 rounded-xl bg-card border border-border",
                    "hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="text-xl font-bold mb-2">
                        {feature.titleFA}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {feature.title}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <Separator className="my-16" />

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">۲۲</div>
              <p className="text-muted-foreground">کامپوننت</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">۵</div>
              <p className="text-muted-foreground">تم فارسی</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">۲</div>
              <p className="text-muted-foreground">پلتفرم (Web & Mobile)</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">۱۰۰٪</div>
              <p className="text-muted-foreground">متن‌باز</p>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16" />

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">تیم و جامعه</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              راد توسط تیم QuarkLab ساخته شده و توسط جامعه توسعه‌دهندگان
              ایرانی پشتیبانی می‌شود.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">مشارکت کنید</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              راد یک پروژه متن‌باز است و از مشارکت شما استقبال می‌کنیم. چه در
              کد، چه در مستندات، و چه در ایده‌های جدید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/QuarkComponent/rad-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  مشاهده در GitHub
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg">تماس با ما</Button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 sm:p-12"
        >
          <h2 className="text-3xl font-bold mb-6">فلسفه طراحی</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">دسترسی‌پذیری:</strong> تمام
              کامپوننت‌ها با رعایت استانداردهای WCAG طراحی شده‌اند تا برای همه
              قابل استفاده باشند.
            </p>
            <p>
              <strong className="text-foreground">قابلیت تنظیم:</strong> شما
              مالک کد هستید. کامپوننت‌ها را به راحتی سفارشی‌سازی کنید.
            </p>
            <p>
              <strong className="text-foreground">سادگی:</strong> API های ساده
              و مستند برای تجربه توسعه بهتر.
            </p>
            <p>
              <strong className="text-foreground">زیبایی:</strong> طراحی
              الهام‌گرفته از هنر و معماری ایرانی با توجه به اصول طراحی مدرن.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
