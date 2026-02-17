"use client";

import { NativeSelect, NativeSelectOption, Label } from "@/registry/web/ui";

export const code = `import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Label } from "@/components/ui/label";

export default function WithLabelExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="fruit">میوه مورد علاقه</Label>
      <NativeSelect id="fruit">
        <NativeSelectOption value="">انتخاب میوه</NativeSelectOption>
        <NativeSelectOption value="apple">سیب</NativeSelectOption>
        <NativeSelectOption value="banana">موز</NativeSelectOption>
        <NativeSelectOption value="orange">پرتقال</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
`;

export default function WithLabelExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="fruit">میوه مورد علاقه</Label>
      <NativeSelect id="fruit">
        <NativeSelectOption value="">انتخاب میوه</NativeSelectOption>
        <NativeSelectOption value="apple">سیب</NativeSelectOption>
        <NativeSelectOption value="banana">موز</NativeSelectOption>
        <NativeSelectOption value="orange">پرتقال</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
