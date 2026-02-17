"use client";

import { Textarea } from "@/registry/web/ui";

export const code = `import { Textarea } from "@/components/ui/textarea";

export default function SizesExample() {
  return (
    <div className="space-y-6">
      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">کوچک (Small - 2 rows)</h3>
        <Textarea
          rows={2}
          placeholder="ناحیه متن کوچک..."
          className="min-h-[40px]"
        />
      </div>
      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">متوسط (Medium - 4 rows)</h3>
        <Textarea rows={4} placeholder="ناحیه متن متوسط..." />
      </div>
      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">بزرگ (Large - 8 rows)</h3>
        <Textarea
          rows={8}
          placeholder="ناحیه متن بزرگ..."
          className="min-h-[120px]"
        />
      </div>
    </div>
  );
}
`;

export default function SizesExample() {
  return (
    <div className="space-y-6">
      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">کوچک (Small - 2 rows)</h3>
        <Textarea
          rows={2}
          placeholder="ناحیه متن کوچک..."
          className="min-h-[40px]"
        />
      </div>
      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">متوسط (Medium - 4 rows)</h3>
        <Textarea rows={4} placeholder="ناحیه متن متوسط..." />
      </div>
      <div className="grid w-full gap-2">
        <h3 className="text-sm font-medium">بزرگ (Large - 8 rows)</h3>
        <Textarea
          rows={8}
          placeholder="ناحیه متن بزرگ..."
          className="min-h-[120px]"
        />
      </div>
    </div>
  );
}
