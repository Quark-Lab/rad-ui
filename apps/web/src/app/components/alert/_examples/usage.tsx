"use client";

import { Alert, AlertDescription, AlertTitle } from "@/registry/web/ui";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export const code = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function UsageExample() {
  return (
    <div className="space-y-4">
      <Alert>
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>عملیات موفق</AlertTitle>
        <AlertDescription>
          پرداخت شما انجام شد. رسید به ایمیل شما ارسال شده است.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>خطا</AlertTitle>
        <AlertDescription>
          مشکلی پیش آمده. لطفاً دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.
        </AlertDescription>
      </Alert>
    </div>
  );
}`;

export default function UsageExample() {
  return (
    <div className="space-y-4">
      <Alert>
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>عملیات موفق</AlertTitle>
        <AlertDescription>
          پرداخت شما انجام شد. رسید به ایمیل شما ارسال شده است.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>خطا</AlertTitle>
        <AlertDescription>
          مشکلی پیش آمده. لطفاً دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.
        </AlertDescription>
      </Alert>
    </div>
  );
}
