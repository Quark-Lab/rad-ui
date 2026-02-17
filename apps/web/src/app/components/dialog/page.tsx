"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  Button,
  Input,
  Label,
} from "@/registry/web/ui";

const codeExamples = {
  basic: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">باز کردن دیالوگ</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>عنوان دیالوگ</DialogTitle>
          <DialogDescription>
            این یک توضیح کوتاه درباره محتوای دیالوگ است
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>محتوای اصلی دیالوگ</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}`,
  withForm: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">ویرایش پروفایل</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>ویرایش پروفایل</DialogTitle>
      <DialogDescription>
        تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name">نام</Label>
        <Input id="name" defaultValue="علی کاوسی" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username">نام کاربری</Label>
        <Input id="username" defaultValue="@alikawosi" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">انصراف</Button>
      </DialogClose>
      <Button type="submit">ذخیره تغییرات</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  customClose: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">اشتراک‌گذاری لینک</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>اشتراک‌گذاری لینک</DialogTitle>
      <DialogDescription>
        هر کسی که این لینک را داشته باشد می‌تواند محتوا را ببیند
      </DialogDescription>
    </DialogHeader>
    <div className="flex items-center gap-2">
      <Input defaultValue="https://..." readOnly className="flex-1" />
      <Button type="button" size="sm">کپی</Button>
    </div>
    <DialogFooter className="sm:justify-start">
      <DialogClose asChild>
        <Button type="button" variant="outline">بستن</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  noCloseButton: `<DialogContent showCloseButton={false}>
  <DialogHeader>
    <DialogTitle>بدون دکمه بستن</DialogTitle>
    <DialogDescription>
      این دیالوگ دکمه X در گوشه بالا ندارد
    </DialogDescription>
  </DialogHeader>
  <DialogFooter>
    <DialogClose asChild>
      <Button variant="outline">بستن</Button>
    </DialogClose>
  </DialogFooter>
</DialogContent>`,
  controlled: `const [open, setOpen] = useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button variant="outline">دیالوگ کنترل‌شده</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>دیالوگ کنترل‌شده</DialogTitle>
      <DialogDescription>
        این دیالوگ با استفاده از state کنترل می‌شود
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button onClick={() => setOpen(false)}>بستن با کد</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  scrollable: `<DialogContent>
  <DialogHeader>
    <DialogTitle>محتوای قابل اسکرول</DialogTitle>
    <DialogDescription>...</DialogDescription>
  </DialogHeader>
  <div className="max-h-[50vh] overflow-y-auto -mx-6 px-6">
    {/* Long content here */}
  </div>
  <DialogFooter>
    <DialogClose asChild>
      <Button variant="outline">بستن</Button>
    </DialogClose>
  </DialogFooter>
</DialogContent>`,
  stickyFooter: `<DialogContent className="sm:max-w-md flex flex-col max-h-[85vh]">
  <DialogHeader>
    <DialogTitle>فوتر ثابت</DialogTitle>
    <DialogDescription>...</DialogDescription>
  </DialogHeader>
  <div className="flex-1 overflow-y-auto -mx-6 px-6">
    {/* Scrollable content */}
  </div>
  <DialogFooter className="border-t border-border pt-4 -mx-6 px-6 -mb-6 pb-6 bg-background">
    <DialogClose asChild>
      <Button variant="outline">انصراف</Button>
    </DialogClose>
    <Button>تایید</Button>
  </DialogFooter>
</DialogContent>`,
  usage: `import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Basic Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <p>Content goes here</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Controlled Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Controlled</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Dialog</DialogTitle>
          </DialogHeader>
          <Button onClick={() => setOpen(false)}>
            Close programmatically
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}`,
  deleteConfirmation: `const [open, setOpen] = useState(false);
const [isDeleting, setIsDeleting] = useState(false);

const handleDelete = async () => {
  setIsDeleting(true);
  try {
    await deleteItem(itemId);
    setOpen(false);
    toast.success("آیتم با موفقیت حذف شد");
  } catch (error) {
    toast.error("خطا در حذف آیتم");
  } finally {
    setIsDeleting(false);
  }
};

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button variant="destructive">حذف</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>آیا مطمئن هستید؟</DialogTitle>
      <DialogDescription>
        این عملیات غیرقابل بازگشت است.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline" disabled={isDeleting}>
          انصراف
        </Button>
      </DialogClose>
      <Button
        variant="destructive"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "در حال حذف..." : "حذف"}
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  preventClose: `<DialogContent
  onPointerDownOutside={(e) => e.preventDefault()}
  onEscapeKeyDown={(e) => e.preventDefault()}
  onInteractOutside={(e) => e.preventDefault()}
>
  <DialogHeader>
    <DialogTitle>فرم اجباری</DialogTitle>
    <DialogDescription>
      این فرم باید تکمیل شود
    </DialogDescription>
  </DialogHeader>
  {/* Form content */}
  <DialogFooter>
    <Button type="submit">ارسال</Button>
  </DialogFooter>
</DialogContent>`,
};

function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <details className="mt-0">
      <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground py-3 border border-t-0 border-border rounded-b-lg px-4 bg-muted/50">
        مشاهده کد
      </summary>
      <div
        className="relative rounded-b-lg overflow-x-auto border border-t-0 border-border bg-muted"
        dir="ltr"
      >
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Copy code"
        >
          <Copy className="h-4 w-4" />
        </button>
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          showLineNumbers
          customStyle={{ margin: 0, borderRadius: 0, fontSize: "0.875rem", background: "transparent" }}
          codeTagProps={{ style: { background: "transparent" } }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </details>
  );
}

export default function DialogPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">دیالوگ (Dialog)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت دیالوگ برای نمایش محتوای مهم در یک پنجره مودال استفاده می‌شود
          که توجه کاربر را به خود جلب می‌کند
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div
          className="relative rounded-lg overflow-x-auto border border-border bg-muted"
          dir="ltr"
        >
          <button
            onClick={() =>
              navigator.clipboard.writeText("npx @quark-lab/rad-ui add dialog")
            }
            className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
            aria-label="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
          <SyntaxHighlighter
            language="bash"
            style={oneLight}
            showLineNumbers
            customStyle={{ margin: 0, borderRadius: "0.5rem", fontSize: "0.875rem", background: "transparent" }}
            codeTagProps={{ style: { background: "transparent" } }}
          >
            npx @quark-lab/rad-ui add dialog
          </SyntaxHighlighter>
        </div>
      </section>

      {/* Component-specific demos */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        {/* Basic Usage */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            استفاده پایه (Basic Usage)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            ساده‌ترین حالت استفاده از دیالوگ با عنوان و توضیحات
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">باز کردن دیالوگ</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>عنوان دیالوگ</DialogTitle>
                  <DialogDescription>
                    این یک توضیح کوتاه درباره محتوای دیالوگ است
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-muted-foreground">
                    محتوای اصلی دیالوگ در اینجا قرار می‌گیرد
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <CodeBlock code={codeExamples.basic} />
        </div>

        {/* With Form */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">با فرم (With Form)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            دیالوگ با فرم ورودی برای ویرایش اطلاعات
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">ویرایش پروفایل</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>ویرایش پروفایل</DialogTitle>
                  <DialogDescription>
                    تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-start">
                      نام
                    </Label>
                    <Input
                      id="name"
                      defaultValue="علی کاوسی"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-start">
                      نام کاربری
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@alikawosi"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">انصراف</Button>
                  </DialogClose>
                  <Button type="submit">ذخیره تغییرات</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <CodeBlock code={codeExamples.withForm} />
        </div>

        {/* Custom Close Button */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            دکمه بستن سفارشی (Custom Close Button)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            استفاده از DialogClose برای ایجاد دکمه بستن سفارشی در فوتر
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">اشتراک‌گذاری لینک</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>اشتراک‌گذاری لینک</DialogTitle>
                  <DialogDescription>
                    هر کسی که این لینک را داشته باشد می‌تواند محتوا را ببیند
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                  <Input
                    defaultValue="https://quarklab.dev/r/dialog"
                    readOnly
                    className="flex-1"
                  />
                  <Button type="button" size="sm">
                    کپی
                  </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      بستن
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <CodeBlock code={codeExamples.customClose} />
        </div>

        {/* No Close Button */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            بدون دکمه بستن (No Close Button)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            مخفی کردن دکمه X در گوشه بالای دیالوگ با showCloseButton=false
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">بدون دکمه X</Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false} className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>بدون دکمه بستن</DialogTitle>
                  <DialogDescription>
                    این دیالوگ دکمه X در گوشه بالا ندارد. برای بستن از دکمه
                    پایین استفاده کنید
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">بستن</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <CodeBlock code={codeExamples.noCloseButton} />
        </div>

        {/* Controlled */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">کنترل شده (Controlled)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            کنترل وضعیت باز/بسته دیالوگ با استفاده از state
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex flex-col items-center justify-center gap-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">دیالوگ کنترل‌شده</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>دیالوگ کنترل‌شده</DialogTitle>
                  <DialogDescription>
                    این دیالوگ با استفاده از state کنترل می‌شود
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button onClick={() => setOpen(false)}>بستن با کد</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <p className="text-sm text-muted-foreground">
              وضعیت دیالوگ: {open ? "باز" : "بسته"}
            </p>
          </div>

          <CodeBlock code={codeExamples.controlled} />
        </div>

        {/* Scrollable Content */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            محتوای قابل اسکرول (Scrollable Content)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            دیالوگ با محتوای طولانی که قابل اسکرول است
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">محتوای طولانی</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>محتوای قابل اسکرول</DialogTitle>
                  <DialogDescription>
                    این دیالوگ محتوای طولانی دارد که قابل اسکرول است
                  </DialogDescription>
                </DialogHeader>
                <div className="max-h-[50vh] overflow-y-auto -mx-6 px-6">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد.
                    </p>
                  ))}
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">بستن</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <CodeBlock code={codeExamples.scrollable} />
        </div>

        {/* Sticky Footer */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            فوتر ثابت (Sticky Footer)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            دیالوگ با فوتر ثابت که همیشه قابل مشاهده است در حین اسکرول
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">فوتر ثابت</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md flex flex-col max-h-[85vh]">
                <DialogHeader>
                  <DialogTitle>فوتر ثابت</DialogTitle>
                  <DialogDescription>
                    این دیالوگ فوتر ثابتی دارد که همیشه قابل مشاهده است
                  </DialogDescription>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto -mx-6 px-6">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                  ))}
                </div>
                <DialogFooter className="border-t border-border pt-4 -mx-6 px-6 -mb-6 pb-6 bg-background">
                  <DialogClose asChild>
                    <Button variant="outline">انصراف</Button>
                  </DialogClose>
                  <Button>تایید</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <CodeBlock code={codeExamples.stickyFooter} />
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>

        {/* Dialog */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Dialog</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-start p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-start p-4 font-semibold">نوع (Type)</th>
                  <th className="text-start p-4 font-semibold">
                    پیش‌فرض (Default)
                  </th>
                  <th className="text-start p-4 font-semibold">
                    توضیحات (Description)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>open</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">وضعیت باز/بسته بودن (کنترل‌شده)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>defaultOpen</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>false</code>
                  </td>
                  <td className="p-4">وضعیت پیش‌فرض (غیرکنترل‌شده)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>onOpenChange</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>(open: boolean) =&gt; void</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">تابع فراخوانی هنگام تغییر وضعیت</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>modal</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>true</code>
                  </td>
                  <td className="p-4">
                    حالت مودال (بلاک کردن تعامل با پس‌زمینه)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* DialogContent */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">DialogContent</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-start p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-start p-4 font-semibold">نوع (Type)</th>
                  <th className="text-start p-4 font-semibold">
                    پیش‌فرض (Default)
                  </th>
                  <th className="text-start p-4 font-semibold">
                    توضیحات (Description)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>showCloseButton</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>true</code>
                  </td>
                  <td className="p-4">نمایش دکمه بستن در گوشه بالا</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>onEscapeKeyDown</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>(event) =&gt; void</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">هندلر فشردن کلید Escape</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>onPointerDownOutside</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>(event) =&gt; void</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">هندلر کلیک خارج از دیالوگ</td>
                </tr>
              </tbody>
            </table>
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
              کیبورد (Keyboard)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Escape
                </code>{" "}
                - بستن دیالوگ
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت بین المان‌های قابل فوکوس داخل دیالوگ
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Shift + Tab
                </code>{" "}
                - حرکت به عقب بین المان‌ها
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              تله فوکوس (Focus Trap)
            </h3>
            <p>
              وقتی دیالوگ باز است، فوکوس در داخل آن محبوس می‌شود و کاربر
              نمی‌تواند با Tab به خارج از دیالوگ برود
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              بازگشت فوکوس (Focus Return)
            </h3>
            <p>
              پس از بستن دیالوگ، فوکوس به المانی که دیالوگ را باز کرده بود
              برمی‌گردد
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">نقش‌های ARIA</h3>
            <p>
              دیالوگ از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                role=&quot;dialog&quot;
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-modal=&quot;true&quot;
              </code>{" "}
              استفاده می‌کند
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
            <h3 className="font-semibold mb-3">عنوان واضح (Clear Title)</h3>
            <p className="text-muted-foreground">
              همیشه از DialogTitle استفاده کنید تا کاربران صفحه‌خوان بتوانند
              محتوای دیالوگ را درک کنند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">توضیحات کمکی (Description)</h3>
            <p className="text-muted-foreground">
              از DialogDescription برای توضیح هدف دیالوگ استفاده کنید، مخصوصاً
              برای اقدامات مخرب
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              دکمه‌های اقدام (Action Buttons)
            </h3>
            <p className="text-muted-foreground">
              دکمه‌های اصلی و ثانویه را در DialogFooter قرار دهید. دکمه انصراف
              همیشه باید وجود داشته باشد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              اندازه مناسب (Appropriate Size)
            </h3>
            <p className="text-muted-foreground">
              از className برای تنظیم عرض دیالوگ استفاده کنید. برای فرم‌های کوچک
              از sm:max-w-sm و برای محتوای بیشتر از sm:max-w-lg استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">محتوای طولانی (Long Content)</h3>
            <p className="text-muted-foreground">
              برای محتوای طولانی از یک div با max-h و overflow-y-auto استفاده
              کنید تا دیالوگ از صفحه خارج نشود
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div
          className="relative rounded-lg overflow-x-auto border border-border bg-muted"
          dir="ltr"
        >
          <button
            onClick={() => navigator.clipboard.writeText(codeExamples.usage)}
            className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
            aria-label="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
          <SyntaxHighlighter
            language="tsx"
            style={oneLight}
            showLineNumbers
            customStyle={{ margin: 0, borderRadius: "0.5rem", fontSize: "0.875rem", background: "transparent" }}
            codeTagProps={{ style: { background: "transparent" } }}
          >
            {codeExamples.usage}
          </SyntaxHighlighter>
        </div>
      </section>

      {/* Advanced Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های پیشرفته (Advanced Examples)
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              دیالوگ تایید حذف (Delete Confirmation)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              نمایش دیالوگ تایید قبل از انجام عملیات حذف
            </p>
            <div
              className="relative rounded-lg overflow-x-auto border border-border bg-muted"
              dir="ltr"
            >
              <button
                onClick={() =>
                  navigator.clipboard.writeText(codeExamples.deleteConfirmation)
                }
                className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
                aria-label="Copy code"
              >
                <Copy className="h-4 w-4" />
              </button>
              <SyntaxHighlighter
                language="tsx"
                style={oneLight}
                showLineNumbers
                customStyle={{ margin: 0, borderRadius: "0.5rem", fontSize: "0.875rem", background: "transparent" }}
                codeTagProps={{ style: { background: "transparent" } }}
              >
                {codeExamples.deleteConfirmation}
              </SyntaxHighlighter>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              جلوگیری از بسته شدن (Prevent Close)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              جلوگیری از بسته شدن دیالوگ با کلیک خارج یا کلید Escape
            </p>
            <div
              className="relative rounded-lg overflow-x-auto border border-border bg-muted"
              dir="ltr"
            >
              <button
                onClick={() =>
                  navigator.clipboard.writeText(codeExamples.preventClose)
                }
                className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
                aria-label="Copy code"
              >
                <Copy className="h-4 w-4" />
              </button>
              <SyntaxHighlighter
                language="tsx"
                style={oneLight}
                showLineNumbers
                customStyle={{ margin: 0, borderRadius: "0.5rem", fontSize: "0.875rem", background: "transparent" }}
                codeTagProps={{ style: { background: "transparent" } }}
              >
                {codeExamples.preventClose}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
