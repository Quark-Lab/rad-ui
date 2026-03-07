"use client";

import { Alert, AlertDescription, AlertTitle } from "@/registry/web/ui";
import { AlertTriangle } from "lucide-react";

export const code = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function CustomColorsAlert() {
  return (
    <Alert className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>اشتراک شما تا ۳ روز دیگر منقضی می‌شود</AlertTitle>
      <AlertDescription>
        برای جلوگیری از قطع سرویس همین حالا تمدید کنید یا به طرح پولی ارتقا
        دهید.
      </AlertDescription>
    </Alert>
  );
}`;

export default function CustomColorsExample() {
  return (
    <Alert className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>اشتراک شما تا ۳ روز دیگر منقضی می‌شود</AlertTitle>
      <AlertDescription>
        برای جلوگیری از قطع سرویس همین حالا تمدید کنید یا به طرح پولی ارتقا
        دهید.
      </AlertDescription>
    </Alert>
  );
}
