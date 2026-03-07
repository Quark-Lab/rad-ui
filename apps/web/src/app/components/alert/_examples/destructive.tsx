"use client";

import { Alert, AlertDescription, AlertTitle } from "@/registry/web/ui";
import { AlertCircle } from "lucide-react";

export const code = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function DestructiveAlert() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>پرداخت ناموفق</AlertTitle>
      <AlertDescription>
        پرداخت شما انجام نشد. لطفاً روش پرداخت را بررسی کرده و دوباره تلاش کنید.
      </AlertDescription>
    </Alert>
  );
}`;

export default function DestructiveExample() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>پرداخت ناموفق</AlertTitle>
      <AlertDescription>
        پرداخت شما انجام نشد. لطفاً روش پرداخت را بررسی کرده و دوباره تلاش
        کنید.
      </AlertDescription>
    </Alert>
  );
}
