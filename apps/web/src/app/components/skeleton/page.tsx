"use client";

import {
  InstallCodeBlock,
  InlineCodeBlock,
} from "@/components/docs/code-block";
import {
  ComponentExample,
  ComponentExampleGroup,
  SubExample,
} from "@/components/docs/component-example";
import {
  ApiReferenceSection,
  PropsTable,
  type PropDefinition,
} from "@/components/docs/props-table";
import BasicExample, { code as basicCode } from "./_examples/basic";
import ShapesExample, { code as shapesCode } from "./_examples/shapes";
import AvatarWithTextExample, { code as avatarWithTextCode } from "./_examples/avatar-with-text";
import CardWithImageExample, { code as cardWithImageCode } from "./_examples/card-with-image";
import ListItemsExample, { code as listItemsCode } from "./_examples/list-items";
import BlogPostExample, { code as blogPostCode } from "./_examples/blog-post";
import UserProfileExample, { code as userProfileCode } from "./_examples/user-profile";
import ProductCardsExample, { code as productCardsCode } from "./_examples/product-cards";
import CommentSectionExample, { code as commentSectionCode } from "./_examples/comment-section";
import DashboardExample, { code as dashboardCode } from "./_examples/dashboard";
import TableExample, { code as tableCode } from "./_examples/table";

const skeletonProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی (برای تعیین اندازه و شکل)",
  },
];

export default function SkeletonPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">اسکلتون (Skeleton)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش‌دهنده بارگذاری برای محتوا.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add skeleton"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="Skeleton برای نمایش حالت بارگذاری محتوا استفاده می‌شود."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="اشکال رایج"
          titleEn="Common Shapes"
          description="با استفاده از className می‌توانید اندازه و شکل را تغییر دهید."
          code={shapesCode}
        >
          <ShapesExample />
        </ComponentExample>

        <ComponentExampleGroup
          title="الگوهای رایج"
          titleEn="Common Patterns"
          description="الگوهای پرتکرار استفاده از Skeleton."
        >
          <SubExample
            title="آواتار با متن"
            titleEn="Avatar with Text"
            code={avatarWithTextCode}
          >
            <AvatarWithTextExample />
          </SubExample>
          <SubExample
            title="کارت با تصویر"
            titleEn="Card with Image"
            code={cardWithImageCode}
          >
            <CardWithImageExample />
          </SubExample>
          <SubExample
            title="آیتم‌های لیست"
            titleEn="List Items"
            code={listItemsCode}
          >
            <ListItemsExample />
          </SubExample>
        </ComponentExampleGroup>
      </section>

      {/* Practical Examples */}
      <ComponentExampleGroup
        title="مثال‌های کاربردی"
        titleEn="Practical Examples"
      >
        <SubExample
          title="بارگذاری پست وبلاگ"
          titleEn="Blog Post Loading"
          description="شبیه‌سازی بارگذاری یک پست کامل وبلاگ."
          code={blogPostCode}
        >
          <BlogPostExample />
        </SubExample>

        <SubExample
          title="بارگذاری پروفایل کاربر"
          titleEn="User Profile Loading"
          description="شبیه‌سازی بارگذاری صفحه پروفایل کاربر."
          code={userProfileCode}
        >
          <UserProfileExample />
        </SubExample>

        <SubExample
          title="شبکه کارت محصول"
          titleEn="Product Cards Grid"
          description="شبیه‌سازی بارگذاری لیست محصولات."
          code={productCardsCode}
        >
          <ProductCardsExample />
        </SubExample>

        <SubExample
          title="بخش نظرات"
          titleEn="Comment Section"
          description="شبیه‌سازی بارگذاری نظرات کاربران."
          code={commentSectionCode}
        >
          <CommentSectionExample />
        </SubExample>

        <SubExample
          title="ویجت‌های داشبورد"
          titleEn="Dashboard Widgets"
          description="شبیه‌سازی بارگذاری ویجت‌های آماری."
          code={dashboardCode}
        >
          <DashboardExample />
        </SubExample>

        <SubExample
          title="بارگذاری جدول"
          titleEn="Table Loading"
          description="شبیه‌سازی بارگذاری داده‌های جدول."
          code={tableCode}
        >
          <TableExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Skeleton"
          description="پراپ‌های کامپوننت Skeleton."
          props={skeletonProps}
        />
      </ApiReferenceSection>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">کی از Skeleton استفاده کنیم؟</h3>
            <p className="text-muted-foreground">
              از Skeleton زمانی استفاده کنید که محتوا در حال بارگذاری است و
              می‌خواهید به کاربر نشان دهید که چیزی در حال اتفاق افتادن است. این
              باعث بهبود تجربه کاربری می‌شود
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">تطابق با محتوای واقعی</h3>
            <p className="text-muted-foreground">
              سعی کنید اندازه و شکل Skeleton با محتوای واقعی که بارگذاری می‌شود
              مطابقت داشته باشد. این باعث کاهش جابجایی محتوا (layout shift)
              می‌شود
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">تعداد مناسب</h3>
            <p className="text-muted-foreground">
              تعداد Skeleton ها را متناسب با تعداد آیتم‌هایی که معمولاً نمایش
              داده می‌شود تنظیم کنید. برای لیست‌ها، 3-5 آیتم کافی است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">انیمیشن</h3>
            <p className="text-muted-foreground">
              انیمیشن pulse به صورت پیش‌فرض فعال است. این انیمیشن باعث می‌شود
              کاربر متوجه شود که محتوا در حال بارگذاری است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">دسترسی‌پذیری</h3>
            <p className="text-muted-foreground">
              در صورت نیاز، می‌توانید{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-busy="true"
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              را به کانتینر اضافه کنید
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
