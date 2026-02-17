"use client";

import { useState } from "react";
import { Checkbox, Label, Button } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function TermsExample() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-2 space-x-reverse">
        <Checkbox
          id="terms"
          checked={termsAccepted}
          onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
          className="mt-1"
        />
        <div className="flex flex-col">
          <Label htmlFor="terms" className="cursor-pointer">
            قوانین و مقررات را مطالعه کرده و می‌پذیرم
          </Label>
          <p className="text-sm text-muted-foreground mt-1">
            با ثبت‌نام، شما{" "}
            <a href="#" className="text-primary hover:underline">
              شرایط استفاده
            </a>{" "}
            و{" "}
            <a href="#" className="text-primary hover:underline">
              سیاست حفظ حریم خصوصی
            </a>{" "}
            ما را می‌پذیرید
          </p>
        </div>
      </div>
      <Button disabled={!termsAccepted}>ادامه ثبت‌نام</Button>
    </div>
  );
}
`;

export default function TermsExample() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-2 space-x-reverse">
        <Checkbox
          id="terms"
          checked={termsAccepted}
          onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
          className="mt-1"
        />
        <div className="flex flex-col">
          <Label htmlFor="terms" className="cursor-pointer">
            قوانین و مقررات را مطالعه کرده و می‌پذیرم
          </Label>
          <p className="text-sm text-muted-foreground mt-1">
            با ثبت‌نام، شما{" "}
            <a href="#" className="text-primary hover:underline">
              شرایط استفاده
            </a>{" "}
            و{" "}
            <a href="#" className="text-primary hover:underline">
              سیاست حفظ حریم خصوصی
            </a>{" "}
            ما را می‌پذیرید
          </p>
        </div>
      </div>
      <Button disabled={!termsAccepted}>ادامه ثبت‌نام</Button>
    </div>
  );
}
