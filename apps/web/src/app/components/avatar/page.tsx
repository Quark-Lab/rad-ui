"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/web/ui";

export default function AvatarDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">آواتار (Avatar)</h1>
        <p className="text-lg text-muted-foreground">
          یک المان تصویری با پشتیبان برای نمایش کاربر
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quarklab/rad-ui add avatar`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <p className="text-muted-foreground mb-4">
          آواتار شامل سه بخش است: Avatar (کانتینر اصلی)، AvatarImage (تصویر)، و
          AvatarFallback (محتوای پشتیبان)
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">امیررضا محمدی</p>
              <p className="text-sm text-muted-foreground">برنامه نویس</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">اندازه‌ها (Sizes)</h2>
        <p className="text-muted-foreground mb-4">
          می‌توانید با className اندازه آواتار را تغییر دهید
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">کوچک</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">متوسط</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-14 w-14">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">بزرگ</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">خیلی بزرگ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Shapes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">شکل‌ها (Shapes)</h2>
        <p className="text-muted-foreground mb-4">
          به صورت پیش‌فرض دایره‌ای است، اما می‌توانید آن را مربع یا گرد کنید
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">دایره‌ای</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="rounded-lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">گرد</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="rounded-sm">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">مربع</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fallback */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          محتوای پشتیبان (Fallback)
        </h2>
        <p className="text-muted-foreground mb-4">
          وقتی تصویر بارگذاری نشود یا خطا رخ دهد، محتوای پشتیبان نمایش داده
          می‌شود
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://invalid-url.com/image.jpg" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://invalid-url.com/image.jpg" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                رض
              </AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://invalid-url.com/image.jpg" />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                AB
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* Grouped Avatars */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          آواتارهای گروهی (Grouped Avatars)
        </h2>
        <p className="text-muted-foreground mb-4">
          نمایش چند آواتار کنار هم با حاشیه منفی برای نمایش اعضای گروه
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex -space-x-4 space-x-reverse">
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://invalid-url.com/image.jpg" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarFallback className="bg-primary text-primary-foreground">
                +5
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های کاربردی (Practical Examples)
        </h2>

        <div className="space-y-6">
          {/* Example 1: User Profile Card */}
          <div>
            <h3 className="text-lg font-medium mb-4">کارت پروفایل کاربر</h3>
            <div className="p-6 rounded-lg bg-card border border-border max-w-sm">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">امیررضا محمدی</h4>
                  <p className="text-sm text-muted-foreground">
                    توسعه‌دهنده فرانت‌اند
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    تهران، ایران
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: Comment Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">بخش نظرات</h3>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>رض</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">رضا احمدی</span>
                      <span className="text-xs text-muted-foreground">
                        ۲ ساعت پیش
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      این کامپوننت عالی است! ممنون از این کتابخانه فوق‌العاده
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      سم
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">سمیرا مرادی</span>
                      <span className="text-xs text-muted-foreground">
                        ۱ روز پیش
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      پشتیبانی از RTL عالی کار کرده 👏
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 3: Team Members */}
          <div>
            <h3 className="text-lg font-medium mb-4">اعضای تیم</h3>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">امیررضا محمدی</p>
                      <p className="text-xs text-muted-foreground">مدیر تیم</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    فعال
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-purple-500 text-white">
                        رض
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">رضا کریمی</p>
                      <p className="text-xs text-muted-foreground">
                        توسعه‌دهنده
                      </p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    آفلاین
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-pink-500 text-white">
                        سر
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">سارا احمدی</p>
                      <p className="text-xs text-muted-foreground">
                        طراح UI/UX
                      </p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    فعال
                  </span>
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

        <div className="space-y-8">
          {/* Avatar */}
          <div>
            <h3 className="text-lg font-medium mb-4">Avatar</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-right p-4 font-semibold">
                      پراپ (Prop)
                    </th>
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
                </tbody>
              </table>
            </div>
          </div>

          {/* AvatarImage */}
          <div>
            <h3 className="text-lg font-medium mb-4">AvatarImage</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-right p-4 font-semibold">
                      پراپ (Prop)
                    </th>
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
                      <code>src</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>string</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>undefined</code>
                    </td>
                    <td className="p-4">آدرس تصویر</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4" dir="ltr">
                      <code>alt</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>string</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>undefined</code>
                    </td>
                    <td className="p-4">متن جایگزین تصویر</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4" dir="ltr">
                      <code>onLoadingStatusChange</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>function</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>undefined</code>
                    </td>
                    <td className="p-4">رویداد تغییر وضعیت بارگذاری</td>
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
                </tbody>
              </table>
            </div>
          </div>

          {/* AvatarFallback */}
          <div>
            <h3 className="text-lg font-medium mb-4">AvatarFallback</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-right p-4 font-semibold">
                      پراپ (Prop)
                    </th>
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
                      <code>delayMs</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>number</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>undefined</code>
                    </td>
                    <td className="p-4">
                      تاخیر نمایش (برای جلوگیری از چشمک زدن محتوا)
                    </td>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              متن جایگزین (Alt Text)
            </h3>
            <p>
              همیشه برای{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                AvatarImage
              </code>{" "}
              یک prop{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">alt</code>{" "}
              مناسب تعریف کنید تا کاربران اسکرین ریدر بتوانند محتوا را درک کنند
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              محتوای پشتیبان معنادار
            </h3>
            <p>
              از حروف اول نام کاربر یا آیکون مناسب در{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                AvatarFallback
              </code>{" "}
              استفاده کنید تا کاربر بتواند هویت را تشخیص دهد
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">کنتراست رنگ</h3>
            <p>
              مطمئن شوید که رنگ محتوای پشتیبان با پس‌زمینه کنتراست کافی دارد تا
              خوانایی خوبی داشته باشد
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
            <h3 className="font-semibold mb-3">اندازه مناسب</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>برای نوار ناوبری و منوها: 32-40px</li>
              <li>برای لیست‌ها و کامنت‌ها: 40-48px</li>
              <li>برای پروفایل کاربر: 64px یا بیشتر</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">محتوای پشتیبان</h3>
            <p className="text-muted-foreground">
              برای محتوای پشتیبان از حروف اول نام استفاده کنید. اگر نام در دسترس
              نیست، از آیکون کاربر استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گروه‌بندی</h3>
            <p className="text-muted-foreground">
              برای نمایش اعضای گروه، از حاشیه منفی استفاده کنید و برای جلوگیری
              از هم‌پوشانی، border اضافه کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">بهینه‌سازی تصاویر</h3>
            <p className="text-muted-foreground">
              تصاویر آواتار را در اندازه مناسب (2x اندازه نمایش) بهینه‌سازی کنید
              و از فرمت WebP یا AVIF استفاده کنید
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
                <code>{`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با اندازه سفارشی</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Avatar className="h-16 w-16">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">مربعی شکل</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Avatar className="rounded-lg">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">گروهی (Grouped)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<div className="flex -space-x-4 space-x-reverse">
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/vercel.png" />
    <AvatarFallback>VC</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+5</AvatarFallback>
  </Avatar>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با استایل سفارشی Fallback</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Avatar>
  <AvatarImage src="https://invalid-url.com/image.jpg" />
  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
    AB
  </AvatarFallback>
</Avatar>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
