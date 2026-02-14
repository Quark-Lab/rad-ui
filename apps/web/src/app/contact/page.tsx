"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, MessageSquare, Send } from "lucide-react";
import { cn, Button, Input, Textarea, Label, Separator } from "@/registry/web/ui";

const contactMethods = [
  {
    icon: Github,
    title: "GitHub",
    description: "مخزن کد، گزارش باگ و درخواست ویژگی",
    link: "https://github.com/QuarkComponent/rad-ui",
    linkText: "QuarkComponent/rad-ui",
  },
  {
    icon: Mail,
    title: "ایمیل",
    description: "برای سوالات و پشتیبانی با ما تماس بگیرید",
    link: "mailto:support@quarklab.dev",
    linkText: "support@quarklab.dev",
  },
  {
    icon: MessageSquare,
    title: "جامعه",
    description: "به جامعه ما بپیوندید و با دیگران ارتباط برقرار کنید",
    link: "#",
    linkText: "به زودی...",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">تماس با ما</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            سوال، پیشنهاد یا بازخورد دارید؟ دوست داریم از شما بشنویم!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">راه‌های ارتباطی</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    >
                      <a
                        href={method.link}
                        target={method.link.startsWith("http") ? "_blank" : undefined}
                        rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={cn(
                          "block p-6 rounded-xl bg-card border border-border",
                          "hover:shadow-lg hover:border-primary/50 transition-all duration-300",
                          "group"
                        )}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1 text-right">
                            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                              {method.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="text-sm text-primary font-mono">
                              {method.linkText}
                            </p>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <Separator />

            {/* Community Section */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">به جامعه بپیوندید</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                راد یک پروژه متن‌باز است. می‌توانید در توسعه آن مشارکت کنید،
                باگ‌ها را گزارش دهید، یا ویژگی‌های جدید پیشنهاد دهید.
              </p>
              <a
                href="https://github.com/QuarkComponent/rad-ui/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  راهنمای مشارکت
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">ارسال پیام</h2>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary"
                >
                  پیام شما با موفقیت ارسال شد!
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name">نام</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    dir="ltr"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message">پیام</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="پیام خود را اینجا بنویسید..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "در حال ارسال..."
                  ) : (
                    <>
                      ارسال پیام
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-6">
                با ارسال این فرم، شما با{" "}
                <a href="#" className="text-primary hover:underline">
                  سیاست حفظ حریم خصوصی
                </a>{" "}
                ما موافقت می‌کنید.
              </p>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            سوالات متداول
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                چگونه می‌توانم مشارکت کنم؟
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                می‌توانید از طریق GitHub در پروژه مشارکت کنید. راهنمای مشارکت
                را در مخزن پروژه مطالعه کنید.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                چگونه باگ گزارش کنم؟
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                لطفاً باگ‌ها را در بخش Issues مخزن GitHub گزارش دهید. سعی
                کنید جزئیات کامل و مثال قابل تکرار ارائه دهید.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                آیا راد رایگان است؟
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                بله، راد کاملاً رایگان و متن‌باز است. می‌توانید در پروژه‌های
                شخصی و تجاری خود استفاده کنید.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                چه زمانی نسخه موبایل منتشر می‌شود؟
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ما در حال کار روی نسخه React Native هستیم. برای اطلاع از
                آخرین اخبار، ما را در GitHub دنبال کنید.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
