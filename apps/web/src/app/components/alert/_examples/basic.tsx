"use client";

import { Alert, AlertDescription, AlertTitle } from "@/registry/web/ui";
import { CheckCircle2 } from "lucide-react";

export const code = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";

export default function BasicAlert() {
  return (
    <Alert>
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>حساب به‌روزرسانی شد</AlertTitle>
      <AlertDescription>
        اطلاعات پروفایل شما ذخیره شد. تغییرات بلافاصله اعمال می‌شوند.
      </AlertDescription>
    </Alert>
  );
}`;

export default function BasicExample() {
  return (
    <Alert>
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>حساب به‌روزرسانی شد</AlertTitle>
      <AlertDescription>
        اطلاعات پروفایل شما ذخیره شد. تغییرات بلافاصله اعمال می‌شوند.
      </AlertDescription>
    </Alert>
  );
}
