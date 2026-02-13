"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Archive,
  Flag,
  Clock,
  Check,
  Plus,
  Minus,
  Send,
  Search,
  Settings,
} from "lucide-react";
import {
  cn,
  Button,
  Input,
  Textarea,
  Switch,
  Checkbox,
  Badge,
  Slider,
  Label,
  Separator,
  Kbd,
  Spinner,
  Skeleton,
  Avatar,
  AvatarFallback,
  RadioGroup,
  RadioGroupItem,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  NativeSelect,
  NativeSelectOption,
} from "@/registry/web/ui";
import Link from "next/link";

export function Showcase() {
  const [switchChecked, setSwitchChecked] = useState(true);
  const [switchChecked2, setSwitchChecked2] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [sliderValue, setSliderValue] = useState([60]);
  const [radioValue, setRadioValue] = useState("k8s");
  const [gpuCount, setGpuCount] = useState(8);
  const [surveyValue, setSurveyValue] = useState("social");

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8" id="components">
      <div className="container mx-auto max-w-7xl">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
          {/* === COLUMN 1: Payment Form (spans 2 rows) === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl bg-card border border-border lg:row-span-2"
          >
            <h3 className="text-sm font-semibold mb-1">روش پرداخت</h3>
            <p className="text-xs text-muted-foreground mb-5">
              تمام تراکنش‌ها امن و رمزنگاری شده هستند
            </p>
            <div className="space-y-3">
              <div>
                <Label className="text-xs mb-1 block">نام روی کارت</Label>
                <Input placeholder="علی کاوسی" />
              </div>
              <div>
                <Label className="text-xs mb-1 block">شماره کارت</Label>
                <Input placeholder="1234 5678 9012 3456" dir="ltr" />
                <p className="text-[10px] text-muted-foreground mt-1">
                  شماره ۱۶ رقمی خود را وارد کنید.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Label className="text-xs mb-1 block">CVV</Label>
                  <Input placeholder="123" dir="ltr" />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">ماه</Label>
                  <NativeSelect>
                    <NativeSelectOption value="">MM</NativeSelectOption>
                    <NativeSelectOption value="01">۰۱</NativeSelectOption>
                    <NativeSelectOption value="02">۰۲</NativeSelectOption>
                  </NativeSelect>
                </div>
                <div>
                  <Label className="text-xs mb-1 block">سال</Label>
                  <NativeSelect>
                    <NativeSelectOption value="">YYYY</NativeSelectOption>
                    <NativeSelectOption value="1404">۱۴۰۴</NativeSelectOption>
                    <NativeSelectOption value="1405">۱۴۰۵</NativeSelectOption>
                  </NativeSelect>
                </div>
              </div>
              <Separator className="my-2" />
              <div>
                <Label className="text-xs font-semibold mb-2 block">
                  آدرس صورتحساب
                </Label>
                <p className="text-[10px] text-muted-foreground mb-2">
                  آدرس مرتبط با روش پرداخت شما
                </p>
                <div className="flex items-center gap-2">
                  <Checkbox defaultChecked />
                  <Label className="text-xs">همان آدرس ارسال</Label>
                </div>
              </div>
              <div>
                <Label className="text-xs mb-1 block">توضیحات</Label>
                <Textarea placeholder="توضیحات اضافه..." rows={2} />
              </div>
              <div className="flex gap-2 pt-1">
                <Button size="sm">ثبت</Button>
                <Button size="sm" variant="outline">
                  انصراف
                </Button>
              </div>
            </div>
          </motion.div>

          {/* === COLUMN 2 TOP: Team Members === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="p-6 rounded-xl bg-card border border-border flex flex-col items-center justify-center"
          >
            <div className="flex -space-x-2 space-x-reverse mb-3">
              <Avatar className="w-10 h-10 border-2 border-card">
                <AvatarFallback className="bg-primary/10 text-primary text-sm">
                  ع
                </AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-card">
                <AvatarFallback className="bg-primary/20 text-primary text-sm">
                  م
                </AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-sm font-semibold mb-1">بدون عضو تیم</h3>
            <p className="text-xs text-muted-foreground mb-4 text-center">
              تیم خود را برای همکاری دعوت کنید.
            </p>
            <Button size="sm" variant="outline" className="w-full">
              + دعوت اعضا
            </Button>
          </motion.div>

          {/* === COLUMN 3 TOP: Two-factor + Verified === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-5 rounded-xl bg-card border border-border space-y-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold">احراز هویت دو مرحله‌ای</p>
                <p className="text-[10px] text-muted-foreground">
                  تایید از طریق ایمیل یا شماره تلفن.
                </p>
              </div>
              <Button size="sm">فعال</Button>
            </div>
            <Separator />
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <p className="text-xs">پروفایل شما تایید شده است.</p>
              <ChevronLeft className="w-4 h-4 text-muted-foreground mr-auto" />
            </div>
            <Separator />
            <p className="text-xs font-semibold">تنظیمات ظاهری</p>
          </motion.div>

          {/* === COLUMN 4 TOP: Context + Search === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-5 rounded-xl bg-card border border-border space-y-3"
          >
            <Button size="sm" variant="outline" className="w-full">
              افزودن زمینه
            </Button>
            <Input
              placeholder="جستجو، پرسش، یا هر چیزی..."
              className="text-xs"
            />
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-[10px]">
                خودکار
              </Badge>
              <Badge variant="outline" className="text-[10px]">
                همه منابع
              </Badge>
            </div>
          </motion.div>

          {/* === COLUMN 2 BOTTOM: Loading States + Slider === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 rounded-xl bg-card border border-border space-y-4"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <Badge className="gap-1.5">
                <Spinner size="sm" className="w-3 h-3" />
                <span className="text-[10px]">همگام‌سازی</span>
              </Badge>
              <Badge variant="outline" className="gap-1.5">
                <Spinner size="sm" className="w-3 h-3" />
                <span className="text-[10px]">به‌روزرسانی</span>
              </Badge>
              <Badge variant="secondary" className="gap-1.5">
                <Spinner size="sm" className="w-3 h-3" />
                <span className="text-[10px]">بارگذاری</span>
              </Badge>
            </div>
            <Separator />
            <div>
              <p className="text-xs font-semibold mb-1">محدوده قیمت</p>
              <p className="text-[10px] text-muted-foreground mb-3">
                بودجه خود را تنظیم کنید (۲۰۰ - ۸۰۰)
              </p>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
              />
              <p className="text-xs mt-2">{sliderValue[0]} نتیجه</p>
            </div>
          </motion.div>

          {/* === COLUMN 3 BOTTOM: Compute Environment === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-5 rounded-xl bg-card border border-border"
          >
            <p className="text-xs font-semibold mb-1">محیط محاسباتی</p>
            <p className="text-[10px] text-muted-foreground mb-3">
              محیط محاسباتی کلاستر خود را انتخاب کنید.
            </p>
            <RadioGroup
              value={radioValue}
              onValueChange={setRadioValue}
              className="space-y-2"
            >
              <div
                className={cn(
                  "flex items-start gap-2 p-3 rounded-lg border transition-colors",
                  radioValue === "k8s"
                    ? "border-primary bg-primary/5"
                    : "border-border"
                )}
              >
                <RadioGroupItem value="k8s" id="rk8s" className="mt-0.5" />
                <div>
                  <Label htmlFor="rk8s" className="text-xs font-semibold">
                    Kubernetes
                  </Label>
                  <p className="text-[10px] text-muted-foreground">
                    اجرای بارهای GPU روی کلاستر K8s. پیش‌فرض.
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  "flex items-start gap-2 p-3 rounded-lg border transition-colors",
                  radioValue === "vm"
                    ? "border-primary bg-primary/5"
                    : "border-border"
                )}
              >
                <RadioGroupItem value="vm" id="rvm" className="mt-0.5" />
                <div>
                  <Label htmlFor="rvm" className="text-xs font-semibold">
                    ماشین مجازی
                  </Label>
                  <p className="text-[10px] text-muted-foreground">
                    دسترسی به کلاستر VM. (به زودی)
                  </p>
                </div>
              </div>
            </RadioGroup>
          </motion.div>

          {/* === COLUMN 4 ROW 2: Actions + Terms === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 rounded-xl bg-card border border-border space-y-3"
          >
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                className="flex-1 gap-1 text-xs"
              >
                <Archive className="w-3 h-3" />
                آرشیو
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="flex-1 gap-1 text-xs"
              >
                <Flag className="w-3 h-3" />
                گزارش
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="flex-1 gap-1 text-xs"
              >
                <Clock className="w-3 h-3" />
                تعویق
              </Button>
            </div>
            <Separator />
            <div className="flex items-start gap-2">
              <Checkbox
                checked={checkboxChecked}
                onCheckedChange={(v) => setCheckboxChecked(v as boolean)}
                className="mt-0.5"
              />
              <Label className="text-xs leading-relaxed">
                من با قوانین و مقررات موافقم
              </Label>
            </div>
          </motion.div>

          {/* === ROW 3: URL Input + Auto === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="p-5 rounded-xl bg-card border border-border space-y-3"
          >
            <Input placeholder="https://" dir="ltr" />
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground">Auto</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary/50 rounded-full"
                  style={{ width: "52%" }}
                />
              </div>
              <span className="text-muted-foreground">52%</span>
              <Button size="sm" className="h-7">
                <Send className="w-3 h-3" />
              </Button>
            </div>
          </motion.div>

          {/* === ROW 3: GPU Counter + Switch === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-5 rounded-xl bg-card border border-border space-y-4"
          >
            <div>
              <p className="text-xs font-semibold mb-1">تعداد GPU</p>
              <p className="text-[10px] text-muted-foreground mb-2">
                بعداً می‌توانید اضافه کنید.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 w-7 p-0"
                  onClick={() => setGpuCount(Math.max(1, gpuCount - 1))}
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="text-sm font-semibold w-8 text-center">
                  {gpuCount}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 w-7 p-0"
                  onClick={() => setGpuCount(gpuCount + 1)}
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold">رنگ‌آمیزی تصویر زمینه</p>
                <p className="text-[10px] text-muted-foreground">
                  اجازه رنگ‌آمیزی تصویر زمینه.
                </p>
              </div>
              <Switch
                checked={switchChecked}
                onCheckedChange={setSwitchChecked}
              />
            </div>
          </motion.div>

          {/* === ROW 3: Pagination + Copilot === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="p-5 rounded-xl bg-card border border-border space-y-3"
          >
            <div className="flex items-center justify-center gap-1">
              <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                <ChevronRight className="w-3 h-3" />
              </Button>
              <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                ۱
              </Button>
              <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                ۲
              </Button>
              <Button size="sm" className="h-7 w-7 p-0">
                ۳
              </Button>
              <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                <ArrowLeft className="w-3 h-3" />
              </Button>
              <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                <ArrowRight className="w-3 h-3" />
              </Button>
              <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                <ChevronLeft className="w-3 h-3" />
              </Button>
            </div>
            <Separator />
            <div className="flex items-center gap-2">
              <NativeSelect className="flex-1 text-xs">
                <NativeSelectOption>Copilot</NativeSelectOption>
                <NativeSelectOption>دستی</NativeSelectOption>
              </NativeSelect>
            </div>
          </motion.div>

          {/* === ROW 3: Survey/How did you hear === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-5 rounded-xl bg-card border border-border"
          >
            <p className="text-xs font-semibold mb-1">چگونه از ما شنیدید؟</p>
            <p className="text-[10px] text-muted-foreground mb-3">
              گزینه‌ای که بهترین توصیف از نحوه آشنایی شما است.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "social", label: "شبکه اجتماعی" },
                { value: "search", label: "موتور جستجو" },
                { value: "referral", label: "معرفی دوستان" },
                { value: "other", label: "سایر" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSurveyValue(option.value)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs border transition-colors",
                    surveyValue === option.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:bg-muted"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* === ROW 4: Chat Input === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="p-5 rounded-xl bg-card border border-border md:col-span-2 space-y-3"
          >
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-muted-foreground" />
              <Input placeholder="پیام بنویسید..." className="text-xs flex-1" />
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Input
                placeholder="@shadcn"
                dir="ltr"
                className="text-xs flex-1"
              />
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Send className="w-3 h-3 text-primary-foreground" />
              </div>
            </div>
          </motion.div>

          {/* === ROW 4: Processing Request === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-5 rounded-xl bg-card border border-border md:col-span-2 flex flex-col items-center justify-center text-center"
          >
            <Spinner className="mb-3" />
            <p className="text-xs font-semibold mb-1">
              در حال پردازش درخواست شما
            </p>
            <p className="text-[10px] text-muted-foreground mb-3">
              لطفاً صبر کنید. صفحه را رفرش نکنید.
            </p>
            <Button size="sm" variant="outline">
              انصراف
            </Button>
          </motion.div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/components">
            <Button size="lg" variant="outline">
              مشاهده تمام کامپوننت‌ها
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
