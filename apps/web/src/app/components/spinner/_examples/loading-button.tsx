"use client";

import { Spinner, Button } from "@/registry/web/ui";

export const code = `import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

export default function LoadingButtonExample() {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <Button>
        <Spinner size="sm" className="me-2" />
        ارسال فرم
      </Button>
      <Button variant="outline">
        <Spinner size="sm" className="me-2" />
        ذخیره تغییرات
      </Button>
      <Button variant="ghost">
        <Spinner size="sm" className="me-2" />
        بارگذاری بیشتر
      </Button>
    </div>
  );
}
`;

export default function LoadingButtonExample() {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <Button>
        <Spinner size="sm" className="me-2" />
        ارسال فرم
      </Button>
      <Button variant="outline">
        <Spinner size="sm" className="me-2" />
        ذخیره تغییرات
      </Button>
      <Button variant="ghost">
        <Spinner size="sm" className="me-2" />
        بارگذاری بیشتر
      </Button>
    </div>
  );
}
