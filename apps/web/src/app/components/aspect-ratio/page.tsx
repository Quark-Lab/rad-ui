"use client";

import Image from "next/image";
import { AspectRatio } from "@/registry/web/ui";

export default function AspectRatioDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">نسبت تصویر (Aspect Ratio)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش محتوا با حفظ نسبت ابعاد دلخواه
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quarklab/rad-ui add aspect-ratio`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <p className="text-muted-foreground mb-4">
          با استفاده از prop ratio می‌توانید نسبت ابعاد محتوا را مشخص کنید
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-md mx-auto">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Photo by Drew Beamer"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Common Ratios */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          نسبت‌های رایج (Common Ratios)
        </h2>
        <p className="text-muted-foreground mb-4">
          نسبت‌های پرکاربرد برای انواع محتوا
        </p>
        <div className="space-y-6">
          {/* 16:9 - Widescreen */}
          <div>
            <h3 className="text-lg font-medium mb-3">16:9 (Widescreen)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-2xl mx-auto">
                <AspectRatio ratio={16 / 9}>
                  <div className="flex items-center justify-center h-full rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                    <div className="text-center">
                      <p className="text-2xl font-bold">16:9</p>
                      <p className="text-sm">ویدیوها، اسلایدها، پست‌های وبلاگ</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>

          {/* 4:3 - Standard */}
          <div>
            <h3 className="text-lg font-medium mb-3">4:3 (Standard)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-xl mx-auto">
                <AspectRatio ratio={4 / 3}>
                  <div className="flex items-center justify-center h-full rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    <div className="text-center">
                      <p className="text-2xl font-bold">4:3</p>
                      <p className="text-sm">تصاویر کلاسیک، پرزنتیشن‌ها</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>

          {/* 1:1 - Square */}
          <div>
            <h3 className="text-lg font-medium mb-3">1:1 (Square)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-sm mx-auto">
                <AspectRatio ratio={1}>
                  <div className="flex items-center justify-center h-full rounded-md bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                    <div className="text-center">
                      <p className="text-2xl font-bold">1:1</p>
                      <p className="text-sm">پست‌های اینستاگرام، آواتار</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>

          {/* 21:9 - Ultrawide */}
          <div>
            <h3 className="text-lg font-medium mb-3">21:9 (Ultrawide)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-3xl mx-auto">
                <AspectRatio ratio={21 / 9}>
                  <div className="flex items-center justify-center h-full rounded-md bg-gradient-to-br from-orange-500 to-red-500 text-white">
                    <div className="text-center">
                      <p className="text-2xl font-bold">21:9</p>
                      <p className="text-sm">بنرها، هدر صفحات</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>

          {/* 9:16 - Portrait */}
          <div>
            <h3 className="text-lg font-medium mb-3">9:16 (Portrait)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-xs mx-auto">
                <AspectRatio ratio={9 / 16}>
                  <div className="flex items-center justify-center h-full rounded-md bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                    <div className="text-center">
                      <p className="text-2xl font-bold">9:16</p>
                      <p className="text-sm">استوری، ریلز، ویدیوی عمودی</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های کاربردی (Practical Examples)
        </h2>

        <div className="space-y-6">
          {/* Example 1: Image Gallery */}
          <div>
            <h3 className="text-lg font-medium mb-4">گالری تصاویر</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <AspectRatio ratio={1}>
                  <Image
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&dpr=2&q=80"
                    alt="Photo 1"
                    fill
                    className="rounded-lg object-cover"
                  />
                </AspectRatio>
                <AspectRatio ratio={1}>
                  <Image
                    src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?w=400&dpr=2&q=80"
                    alt="Photo 2"
                    fill
                    className="rounded-lg object-cover"
                  />
                </AspectRatio>
                <AspectRatio ratio={1}>
                  <Image
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&dpr=2&q=80"
                    alt="Photo 3"
                    fill
                    className="rounded-lg object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>

          {/* Example 2: Video Embed */}
          <div>
            <h3 className="text-lg font-medium mb-4">ویدیو Embed</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-3xl mx-auto">
                <AspectRatio ratio={16 / 9}>
                  <div className="flex items-center justify-center h-full rounded-lg bg-muted border border-border">
                    <div className="text-center text-muted-foreground">
                      <svg
                        className="w-16 h-16 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-sm">
                        اینجا می‌توانید ویدیو یا iframe قرار دهید
                      </p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>

          {/* Example 3: Product Cards */}
          <div>
            <h3 className="text-lg font-medium mb-4">کارت محصولات</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-lg border border-border overflow-hidden">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&dpr=2&q=80"
                      alt="Product 1"
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">هدفون بی‌سیم</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      کیفیت صدای عالی
                    </p>
                    <p className="font-bold text-primary">۱,۲۵۰,۰۰۰ تومان</p>
                  </div>
                </div>

                <div className="rounded-lg border border-border overflow-hidden">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&dpr=2&q=80"
                      alt="Product 2"
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">ساعت هوشمند</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      پیگیری سلامت و فیتنس
                    </p>
                    <p className="font-bold text-primary">۲,۸۰۰,۰۰۰ تومان</p>
                  </div>
                </div>

                <div className="rounded-lg border border-border overflow-hidden">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&dpr=2&q=80"
                      alt="Product 3"
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">دوربین دیجیتال</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      عکاسی حرفه‌ای
                    </p>
                    <p className="font-bold text-primary">۱۵,۵۰۰,۰۰۰ تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 4: Hero Banner */}
          <div>
            <h3 className="text-lg font-medium mb-4">بنر صفحه اصلی</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <AspectRatio ratio={21 / 9}>
                <div className="relative h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&dpr=2&q=80"
                    alt="Hero Banner"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-4xl font-bold mb-4">
                        به راد UI خوش آمدید
                      </h2>
                      <p className="text-lg mb-6">
                        کتابخانه کامپوننت با پشتیبانی کامل از RTL
                      </p>
                      <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                        شروع کنید
                      </button>
                    </div>
                  </div>
                </div>
              </AspectRatio>
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
                  <code>ratio</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>1</code>
                </td>
                <td className="p-4">نسبت ابعاد مورد نظر (مثلاً 16/9 یا 4/3)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>asChild</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>false</code>
                </td>
                <td className="p-4">
                  رندر به عنوان فرزند و ترکیب props (برای ترکیب با کامپوننت‌های
                  دیگر)
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
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">انتخاب نسبت مناسب</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>برای ویدیوها و اسلایدها: 16:9</li>
              <li>برای تصاویر کلاسیک: 4:3</li>
              <li>برای گالری و شبکه‌های تصویر: 1:1</li>
              <li>برای بنرها و هدرها: 21:9 یا 3:1</li>
              <li>برای استوری و محتوای موبایل: 9:16</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">بهینه‌سازی تصاویر</h3>
            <p className="text-muted-foreground">
              همیشه از تصاویر بهینه شده با کیفیت مناسب استفاده کنید. با استفاده از
              Next.js Image، تصاویر به صورت خودکار بهینه می‌شوند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">ریسپانسیو کردن</h3>
            <p className="text-muted-foreground">
              از کلاس‌های max-width برای محدود کردن عرض در صفحات بزرگ استفاده
              کنید تا محتوا خیلی کشیده نشود
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استفاده با Next.js Image</h3>
            <p className="text-muted-foreground">
              برای استفاده با کامپوننت Image از Next.js، حتماً از prop{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">fill</code>{" "}
              استفاده کنید و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                object-cover
              </code>{" "}
              یا{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                object-contain
              </code>{" "}
              را اعمال کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">دسترسی‌پذیری</h3>
            <p className="text-muted-foreground">
              همیشه برای تصاویر alt text مناسب قرار دهید تا کاربران اسکرین ریدر
              بتوانند محتوا را درک کنند
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
                <code>{`import { AspectRatio } from "@/components/ui/aspect-ratio";

<AspectRatio ratio={16 / 9}>
  <img src="image.jpg" alt="Description" />
</AspectRatio>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با Next.js Image</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

<AspectRatio ratio={16 / 9}>
  <Image
    src="https://example.com/image.jpg"
    alt="Description"
    fill
    className="rounded-md object-cover"
  />
</AspectRatio>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">مربع (Square)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<AspectRatio ratio={1}>
  <div className="flex items-center justify-center h-full bg-muted">
    محتوای مربعی
  </div>
</AspectRatio>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با iframe (ویدیو Embed)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video"
    className="w-full h-full"
    allowFullScreen
  />
</AspectRatio>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">گالری (Grid Gallery)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<div className="grid grid-cols-3 gap-4">
  {images.map((image, i) => (
    <AspectRatio key={i} ratio={1}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="rounded-lg object-cover"
      />
    </AspectRatio>
  ))}
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
