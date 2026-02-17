"use client";

import { useState } from "react";
import { Slider, Label } from "@/registry/web/ui";
import { DollarSign } from "lucide-react";

export const code = `import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";

export default function RangeExample() {
  const [priceRange, setPriceRange] = useState([20, 80]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>محدوده قیمت</Label>
        <span className="text-sm text-muted-foreground" dir="ltr">
          \${priceRange[0]} - \${priceRange[1]}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <DollarSign className="h-4 w-4 text-muted-foreground" />
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={100}
          step={1}
          minStepsBetweenThumbs={1}
          className="flex-1"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        تعداد دسته‌ها به صورت خودکار بر اساس طول آرایه مقدار تعیین می‌شود. برای اسلایدر بازه‌ای، آرایه با دو مقدار استفاده کنید
      </p>
    </div>
  );
}
`;

export default function RangeExample() {
  const [priceRange, setPriceRange] = useState([20, 80]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>محدوده قیمت</Label>
        <span className="text-sm text-muted-foreground" dir="ltr">
          ${priceRange[0]} - ${priceRange[1]}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <DollarSign className="h-4 w-4 text-muted-foreground" />
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={100}
          step={1}
          minStepsBetweenThumbs={1}
          className="flex-1"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        تعداد دسته‌ها به صورت خودکار بر اساس طول آرایه مقدار تعیین می‌شود. برای اسلایدر بازه‌ای، آرایه با دو مقدار استفاده کنید
      </p>
    </div>
  );
}
