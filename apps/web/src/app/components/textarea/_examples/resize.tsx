"use client";

import { Textarea } from "@/registry/web/ui";

export const code = `import { Textarea } from "@/components/ui/textarea";

export default function ResizeExample() {
  return (
    <div className="space-y-6">
      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">تغییر اندازه عمودی (Vertical Resize)</h3>
        <Textarea
          placeholder="می‌توانید ارتفاع را تغییر دهید..."
          className="resize-y"
        />
      </div>

      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">بدون تغییر اندازه (No Resize)</h3>
        <Textarea
          placeholder="اندازه ثابت است..."
          className="resize-none"
        />
      </div>

      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">تغییر اندازه در دو جهت (Both Directions)</h3>
        <Textarea
          placeholder="می‌توانید عرض و ارتفاع را تغییر دهید..."
          className="resize"
        />
      </div>
    </div>
  );
}
`;

export default function ResizeExample() {
  return (
    <div className="space-y-6">
      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">تغییر اندازه عمودی (Vertical Resize)</h3>
        <Textarea
          placeholder="می‌توانید ارتفاع را تغییر دهید..."
          className="resize-y"
        />
      </div>

      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">بدون تغییر اندازه (No Resize)</h3>
        <Textarea
          placeholder="اندازه ثابت است..."
          className="resize-none"
        />
      </div>

      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">تغییر اندازه در دو جهت (Both Directions)</h3>
        <Textarea
          placeholder="می‌توانید عرض و ارتفاع را تغییر دهید..."
          className="resize"
        />
      </div>
    </div>
  );
}
