"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem, Label } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function CardStyleExample() {
  const [plan, setPlan] = useState("free");

  return (
    <RadioGroup value={plan} onValueChange={setPlan}>
      <div className="grid gap-4">
        <div
          className={\`relative flex items-start flex-row-reverse gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors \${
            plan === "free"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }\`}
          onClick={() => setPlan("free")}
        >
          <RadioGroupItem value="free" id="free" className="mt-1" />
          <div className="flex-1">
            <Label htmlFor="free" className="cursor-pointer flex flex-col items-end">
              <div className="font-semibold">رایگان</div>
              <p className="text-sm text-muted-foreground mt-1">
                برای شروع کار و آزمایش ویژگی‌ها
              </p>
              <p className="text-sm font-medium mt-2">۰ تومان / ماه</p>
            </Label>
          </div>
        </div>
        <div
          className={\`relative flex items-start flex-row-reverse gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors \${
            plan === "pro"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }\`}
          onClick={() => setPlan("pro")}
        >
          <RadioGroupItem value="pro" id="pro" className="mt-1" />
          <div className="flex-1">
            <Label htmlFor="pro" className="cursor-pointer flex flex-col items-end">
              <div className="font-semibold">حرفه‌ای</div>
              <p className="text-sm text-muted-foreground mt-1">
                برای کسب‌وکارهای در حال رشد
              </p>
              <p className="text-sm font-medium mt-2">۲۹۹,۰۰۰ تومان / ماه</p>
            </Label>
          </div>
        </div>
        <div
          className={\`relative flex items-start flex-row-reverse gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors \${
            plan === "enterprise"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }\`}
          onClick={() => setPlan("enterprise")}
        >
          <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
          <div className="flex-1">
            <Label htmlFor="enterprise" className="cursor-pointer flex flex-col items-end">
              <div className="font-semibold">سازمانی</div>
              <p className="text-sm text-muted-foreground mt-1">
                برای سازمان‌های بزرگ با نیازهای سفارشی
              </p>
              <p className="text-sm font-medium mt-2">تماس بگیرید</p>
            </Label>
          </div>
        </div>
      </div>
    </RadioGroup>
  );
}
`;

export default function CardStyleExample() {
  const [plan, setPlan] = useState("free");

  return (
    <RadioGroup value={plan} onValueChange={setPlan}>
      <div className="grid gap-4">
        <div
          className={`relative flex items-start flex-row-reverse gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
            plan === "free"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
          onClick={() => setPlan("free")}
        >
          <RadioGroupItem value="free" id="free" className="mt-1" />
          <div className="flex-1">
            <Label htmlFor="free" className="cursor-pointer flex flex-col items-end">
              <div className="font-semibold">رایگان</div>
              <p className="text-sm text-muted-foreground mt-1">
                برای شروع کار و آزمایش ویژگی‌ها
              </p>
              <p className="text-sm font-medium mt-2">۰ تومان / ماه</p>
            </Label>
          </div>
        </div>
        <div
          className={`relative flex items-start flex-row-reverse gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
            plan === "pro"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
          onClick={() => setPlan("pro")}
        >
          <RadioGroupItem value="pro" id="pro" className="mt-1" />
          <div className="flex-1">
            <Label htmlFor="pro" className="cursor-pointer flex flex-col items-end">
              <div className="font-semibold">حرفه‌ای</div>
              <p className="text-sm text-muted-foreground mt-1">
                برای کسب‌وکارهای در حال رشد
              </p>
              <p className="text-sm font-medium mt-2">۲۹۹,۰۰۰ تومان / ماه</p>
            </Label>
          </div>
        </div>
        <div
          className={`relative flex items-start flex-row-reverse gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
            plan === "enterprise"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
          onClick={() => setPlan("enterprise")}
        >
          <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
          <div className="flex-1">
            <Label htmlFor="enterprise" className="cursor-pointer flex flex-col items-end">
              <div className="font-semibold">سازمانی</div>
              <p className="text-sm text-muted-foreground mt-1">
                برای سازمان‌های بزرگ با نیازهای سفارشی
              </p>
              <p className="text-sm font-medium mt-2">تماس بگیرید</p>
            </Label>
          </div>
        </div>
      </div>
    </RadioGroup>
  );
}
