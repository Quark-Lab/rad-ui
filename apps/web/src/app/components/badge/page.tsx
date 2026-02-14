"use client";

import { Badge } from "@/registry/web/ui";
import {
  Check,
  X,
  Clock,
  Star,
  TrendingUp,
  AlertCircle,
  Mail,
  Bell,
  Tag,
  Sparkles,
} from "lucide-react";

export default function BadgeDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">نشان (Badge)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش برچسب، وضعیت، یا دسته‌بندی
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quark-lab/rad-ui add badge`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <p className="text-muted-foreground mb-4">
          Badge برای نمایش برچسب‌ها و نشان‌های کوچک استفاده می‌شود
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-3 flex-wrap">
            <Badge>پیش‌فرض</Badge>
            <Badge>فعال</Badge>
            <Badge>جدید</Badge>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          انواع (Variants)
        </h2>
        <p className="text-muted-foreground mb-4">
          چهار نوع مختلف برای موارد مختلف
        </p>
        <div className="space-y-6">
          {/* Default */}
          <div>
            <h3 className="text-lg font-medium mb-3">پیش‌فرض (Default)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="default">فعال</Badge>
                <Badge variant="default">جدید</Badge>
                <Badge variant="default">ویژه</Badge>
              </div>
            </div>
          </div>

          {/* Secondary */}
          <div>
            <h3 className="text-lg font-medium mb-3">ثانویه (Secondary)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="secondary">در انتظار</Badge>
                <Badge variant="secondary">پیش‌نویس</Badge>
                <Badge variant="secondary">آرشیو</Badge>
              </div>
            </div>
          </div>

          {/* Destructive */}
          <div>
            <h3 className="text-lg font-medium mb-3">هشدار (Destructive)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="destructive">خطا</Badge>
                <Badge variant="destructive">حذف شده</Badge>
                <Badge variant="destructive">رد شده</Badge>
              </div>
            </div>
          </div>

          {/* Outline */}
          <div>
            <h3 className="text-lg font-medium mb-3">حاشیه‌دار (Outline)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="outline">برچسب</Badge>
                <Badge variant="outline">دسته‌بندی</Badge>
                <Badge variant="outline">تگ</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با آیکون (With Icons)</h2>
        <p className="text-muted-foreground mb-4">
          می‌توانید آیکون به Badge اضافه کنید
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-3 flex-wrap">
            <Badge variant="default" className="gap-1">
              <Check className="h-3 w-3" />
              تایید شده
            </Badge>
            <Badge variant="destructive" className="gap-1">
              <X className="h-3 w-3" />
              رد شده
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Clock className="h-3 w-3" />
              در انتظار
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Star className="h-3 w-3" />
              ویژه
            </Badge>
            <Badge variant="default" className="gap-1">
              <TrendingUp className="h-3 w-3" />
              پرفروش
            </Badge>
          </div>
        </div>
      </section>

      {/* Custom Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          رنگ‌های سفارشی (Custom Colors)
        </h2>
        <p className="text-muted-foreground mb-4">
          با استفاده از className می‌توانید رنگ‌های سفارشی اعمال کنید
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-3 flex-wrap">
            <Badge className="bg-blue-500 text-white hover:bg-blue-600">
              آبی
            </Badge>
            <Badge className="bg-green-500 text-white hover:bg-green-600">
              سبز
            </Badge>
            <Badge className="bg-purple-500 text-white hover:bg-purple-600">
              بنفش
            </Badge>
            <Badge className="bg-orange-500 text-white hover:bg-orange-600">
              نارنجی
            </Badge>
            <Badge className="bg-pink-500 text-white hover:bg-pink-600">
              صورتی
            </Badge>
            <Badge className="bg-yellow-500 text-gray-900 hover:bg-yellow-600">
              زرد
            </Badge>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های کاربردی (Practical Examples)
        </h2>

        <div className="space-y-6">
          {/* Example 1: Status Badges */}
          <div>
            <h3 className="text-lg font-medium mb-4">نشان‌های وضعیت</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="text-sm">سفارش #1234</span>
                  <Badge variant="default" className="gap-1">
                    <Check className="h-3 w-3" />
                    تحویل داده شده
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="text-sm">سفارش #1235</span>
                  <Badge variant="secondary" className="gap-1">
                    <Clock className="h-3 w-3" />
                    در حال پردازش
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="text-sm">سفارش #1236</span>
                  <Badge variant="destructive" className="gap-1">
                    <X className="h-3 w-3" />
                    لغو شده
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="text-sm">سفارش #1237</span>
                  <Badge
                    variant="outline"
                    className="gap-1 bg-yellow-50 dark:bg-yellow-950 border-yellow-300"
                  >
                    <AlertCircle className="h-3 w-3" />
                    نیاز به بررسی
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: Notification Badges */}
          <div>
            <h3 className="text-lg font-medium mb-4">نشان‌های اعلان</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex flex-wrap gap-6">
                <div className="relative">
                  <Mail className="h-6 w-6" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-[10px]">
                    5
                  </Badge>
                </div>
                <div className="relative">
                  <Bell className="h-6 w-6" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-[10px]">
                    12
                  </Badge>
                </div>
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                  <span className="text-sm">پیام‌ها</span>
                  <Badge variant="destructive">3</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Example 3: Product Tags */}
          <div>
            <h3 className="text-lg font-medium mb-4">برچسب‌های محصول</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold">هدفون بی‌سیم</h4>
                    <Badge variant="default" className="gap-1">
                      <Sparkles className="h-3 w-3" />
                      جدید
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    کیفیت صدای عالی با نویز کنسلینگ
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Tag className="h-3 w-3" />
                      الکترونیک
                    </Badge>
                    <Badge className="bg-green-500 text-white">موجود</Badge>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold">کفش ورزشی</h4>
                    <Badge variant="destructive">50% تخفیف</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    راحتی بی‌نظیر برای ورزش روزانه
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Tag className="h-3 w-3" />
                      پوشاک
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200"
                    >
                      تعداد محدود
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 4: User Badges */}
          <div>
            <h3 className="text-lg font-medium mb-4">نشان‌های کاربری</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">علی محمدی</span>
                      <Badge
                        variant="default"
                        className="gap-1 bg-blue-500 text-white"
                      >
                        <Check className="h-3 w-3" />
                        تایید شده
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      توسعه‌دهنده فرانت‌اند
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">سارا احمدی</span>
                      <Badge
                        variant="outline"
                        className="gap-1 bg-purple-50 dark:bg-purple-950 border-purple-300"
                      >
                        <Star className="h-3 w-3" />
                        Pro
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">طراح UI/UX</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">رضا کریمی</span>
                      <Badge
                        variant="secondary"
                        className="gap-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200"
                      >
                        <Sparkles className="h-3 w-3" />
                        مدیر
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      مدیر محصول
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                <th className="text-right p-4 font-semibold">نوع (Type)</th>
                <th className="text-right p-4 font-semibold">
                  پیش‌فرض (Default)
                </th>
                <th className="text-right p-4 font-semibold">
                  توضیحات (Description)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>variant</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>
                    "default" | "secondary" | "destructive" | "outline"
                  </code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"default"</code>
                </td>
                <td className="p-4">نوع نمایشی Badge</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>className</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">کلاس‌های CSS سفارشی</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>children</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>ReactNode</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">محتوای Badge (متن یا آیکون)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">محتوای واضح</h3>
            <p>
              متن داخل Badge باید واضح و قابل فهم باشد. از مخفف‌های نامفهوم
              خودداری کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">کنتراست رنگ</h3>
            <p>
              مطمئن شوید که رنگ متن و پس‌زمینه کنتراست کافی دارند (نسبت حداقل
              4.5:1)
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              معنای رنگی
            </h3>
            <p>
              فقط به رنگ برای انتقال اطلاعات تکیه نکنید. از متن یا آیکون نیز
              استفاده کنید
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">متن کوتاه و مختصر</h3>
            <p className="text-muted-foreground">
              Badge برای متن‌های کوتاه طراحی شده. از متن‌های طولانی خودداری کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استفاده مناسب از variant</h3>
            <p className="text-muted-foreground">
              از destructive فقط برای خطا و هشدار استفاده کنید. از secondary برای
              اطلاعات کم اهمیت‌تر
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">آیکون‌های کوچک</h3>
            <p className="text-muted-foreground">
              اگر از آیکون استفاده می‌کنید، اندازه آن را 3x3 یا 4x4 نگه دارید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">رنگ‌های سفارشی</h3>
            <p className="text-muted-foreground">
              هنگام استفاده از رنگ‌های سفارشی، حتماً حالت hover را نیز تنظیم کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">جایگذاری</h3>
            <p className="text-muted-foreground">
              Badge را در کنار عناصر مرتبط قرار دهید، نه به صورت مجزا
            </p>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          نحوه استفاده (Usage Examples)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">پایه (Basic)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import { Badge } from "@/components/ui/badge";

<Badge>فعال</Badge>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با variant</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Badge variant="default">پیش‌فرض</Badge>
<Badge variant="secondary">ثانویه</Badge>
<Badge variant="destructive">خطا</Badge>
<Badge variant="outline">حاشیه‌دار</Badge>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با آیکون</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

<Badge className="gap-1">
  <Check className="h-3 w-3" />
  تایید شده
</Badge>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">رنگ سفارشی</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Badge className="bg-blue-500 text-white hover:bg-blue-600">
  سفارشی
</Badge>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">نشان اعلان</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<div className="relative">
  <Bell className="h-6 w-6" />
  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-[10px]">
    5
  </Badge>
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
