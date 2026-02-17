"use client";

import { Label } from "@/registry/web/ui";

export const code = `import { Label } from "@/components/ui/label";

export default function ControlsExample() {
  return (
    <div className="space-y-6">
      {/* Text Input */}
      <div className="space-y-2 max-w-sm">
        <Label htmlFor="name">نام</Label>
        <input
          type="text"
          id="name"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="نام خود را وارد کنید"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <input
          type="checkbox"
          id="terms"
          className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
        <Label htmlFor="terms" className="cursor-pointer">
          شرایط و قوانین را می‌پذیرم
        </Label>
      </div>

      {/* Radio */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 space-x-reverse">
          <input
            type="radio"
            id="option1"
            name="options"
            className="h-4 w-4 border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
          <Label htmlFor="option1" className="cursor-pointer">
            گزینه اول
          </Label>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <input
            type="radio"
            id="option2"
            name="options"
            className="h-4 w-4 border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
          <Label htmlFor="option2" className="cursor-pointer">
            گزینه دوم
          </Label>
        </div>
      </div>

      {/* Textarea */}
      <div className="space-y-2 max-w-sm">
        <Label htmlFor="message">پیام</Label>
        <textarea
          id="message"
          rows={4}
          className="flex min-h-[80px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="پیام خود را بنویسید..."
        />
      </div>

      {/* Select */}
      <div className="space-y-2 max-w-sm">
        <Label htmlFor="country">کشور</Label>
        <select
          id="country"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option>ایران</option>
          <option>آمریکا</option>
          <option>کانادا</option>
          <option>انگلستان</option>
        </select>
      </div>
    </div>
  );
}
`;

export default function ControlsExample() {
  return (
    <div className="space-y-6">
      {/* Text Input */}
      <div className="space-y-2 max-w-sm">
        <Label htmlFor="name">نام</Label>
        <input
          type="text"
          id="name"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="نام خود را وارد کنید"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <input
          type="checkbox"
          id="terms"
          className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
        <Label htmlFor="terms" className="cursor-pointer">
          شرایط و قوانین را می‌پذیرم
        </Label>
      </div>

      {/* Radio */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 space-x-reverse">
          <input
            type="radio"
            id="option1"
            name="options"
            className="h-4 w-4 border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
          <Label htmlFor="option1" className="cursor-pointer">
            گزینه اول
          </Label>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <input
            type="radio"
            id="option2"
            name="options"
            className="h-4 w-4 border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
          <Label htmlFor="option2" className="cursor-pointer">
            گزینه دوم
          </Label>
        </div>
      </div>

      {/* Textarea */}
      <div className="space-y-2 max-w-sm">
        <Label htmlFor="message">پیام</Label>
        <textarea
          id="message"
          rows={4}
          className="flex min-h-[80px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="پیام خود را بنویسید..."
        />
      </div>

      {/* Select */}
      <div className="space-y-2 max-w-sm">
        <Label htmlFor="country">کشور</Label>
        <select
          id="country"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option>ایران</option>
          <option>آمریکا</option>
          <option>کانادا</option>
          <option>انگلستان</option>
        </select>
      </div>
    </div>
  );
}
