"use client";

import { useState } from "react";
import { Field, FieldLabel, FieldDescription, Slider } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";

export default function SliderExample() {
  const [sliderValue, setSliderValue] = useState([400]);

  return (
    <div className="max-w-sm">
      <Field>
        <FieldLabel>محدوده قیمت</FieldLabel>
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          min={0}
          max={1000}
          step={50}
        />
        <FieldDescription>
          بودجه خود را تنظیم کنید ({sliderValue[0]} تومان).
        </FieldDescription>
      </Field>
    </div>
  );
}
`;

export default function SliderExample() {
  const [sliderValue, setSliderValue] = useState([400]);

  return (
    <div className="max-w-sm">
      <Field>
        <FieldLabel>محدوده قیمت</FieldLabel>
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          min={0}
          max={1000}
          step={50}
        />
        <FieldDescription>
          بودجه خود را تنظیم کنید ({sliderValue[0]} تومان).
        </FieldDescription>
      </Field>
    </div>
  );
}
