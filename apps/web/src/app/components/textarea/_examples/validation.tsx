"use client";

import { Textarea, Label } from "@/registry/web/ui";

export const code = `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ValidationExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="valid">نظر شما</Label>
        <Textarea
          id="valid"
          placeholder="نظر خود را بنویسید..."
          className="border-green-500 focus-visible:ring-green-500"
          defaultValue="این یک ورودی معتبر است"
        />
        <p className="text-sm text-green-600">نظر شما با موفقیت ذخیره شد!</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="invalid">توضیحات</Label>
        <Textarea
          id="invalid"
          placeholder="لطفا توضیحات وارد کنید..."
          aria-invalid="true"
          className="border-destructive focus-visible:ring-destructive"
        />
        <p className="text-sm text-destructive">
          لطفا حداقل 10 کاراکتر وارد کنید
        </p>
      </div>
    </div>
  );
}
`;

export default function ValidationExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="valid">نظر شما</Label>
        <Textarea
          id="valid"
          placeholder="نظر خود را بنویسید..."
          className="border-green-500 focus-visible:ring-green-500"
          defaultValue="این یک ورودی معتبر است"
        />
        <p className="text-sm text-green-600">نظر شما با موفقیت ذخیره شد!</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="invalid">توضیحات</Label>
        <Textarea
          id="invalid"
          placeholder="لطفا توضیحات وارد کنید..."
          aria-invalid="true"
          className="border-destructive focus-visible:ring-destructive"
        />
        <p className="text-sm text-destructive">
          لطفا حداقل 10 کاراکتر وارد کنید
        </p>
      </div>
    </div>
  );
}
