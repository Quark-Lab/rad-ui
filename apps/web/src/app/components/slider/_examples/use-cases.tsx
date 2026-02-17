"use client";

import { useState } from "react";
import { Slider, Label } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function UseCasesExample() {
  const [brightness, setBrightness] = useState([75]);
  const [priceRange, setPriceRange] = useState([20, 80]);

  return (
    <div className="space-y-8">
      {/* Volume Control */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>سطح صدا</Label>
          <span className="text-sm text-muted-foreground">
            {brightness}%
          </span>
        </div>
        <Slider
          value={brightness}
          onValueChange={setBrightness}
          max={100}
          step={1}
        />
        <p className="text-xs text-muted-foreground">
          برای تنظیم سطح صدا از اسلایدر استفاده کنید
        </p>
      </div>

      {/* Price Filter */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>محدوده قیمت</Label>
          <span className="text-sm text-muted-foreground" dir="ltr">
            \${priceRange[0]} - \${priceRange[1]}
          </span>
        </div>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={100}
          step={1}
          minStepsBetweenThumbs={5}
        />
        <p className="text-xs text-muted-foreground">
          محدوده قیمت محصولات را مشخص کنید
        </p>
      </div>

      {/* Age Range */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>سن</Label>
          <span className="text-sm text-muted-foreground">
            18-65 سال
          </span>
        </div>
        <Slider
          defaultValue={[18, 65]}
          min={0}
          max={100}
          step={1}
          minStepsBetweenThumbs={1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0 سال</span>
          <span>100 سال</span>
        </div>
      </div>
    </div>
  );
}
`;

export default function UseCasesExample() {
  const [brightness, setBrightness] = useState([75]);
  const [priceRange, setPriceRange] = useState([20, 80]);

  return (
    <div className="space-y-8">
      {/* Volume Control */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>سطح صدا</Label>
          <span className="text-sm text-muted-foreground">
            {brightness}%
          </span>
        </div>
        <Slider
          value={brightness}
          onValueChange={setBrightness}
          max={100}
          step={1}
        />
        <p className="text-xs text-muted-foreground">
          برای تنظیم سطح صدا از اسلایدر استفاده کنید
        </p>
      </div>

      {/* Price Filter */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>محدوده قیمت</Label>
          <span className="text-sm text-muted-foreground" dir="ltr">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={100}
          step={1}
          minStepsBetweenThumbs={5}
        />
        <p className="text-xs text-muted-foreground">
          محدوده قیمت محصولات را مشخص کنید
        </p>
      </div>

      {/* Age Range */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>سن</Label>
          <span className="text-sm text-muted-foreground">
            18-65 سال
          </span>
        </div>
        <Slider
          defaultValue={[18, 65]}
          min={0}
          max={100}
          step={1}
          minStepsBetweenThumbs={1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0 سال</span>
          <span>100 سال</span>
        </div>
      </div>
    </div>
  );
}
