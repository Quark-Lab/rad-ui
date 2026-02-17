"use client";

import { NativeSelect, NativeSelectOption, Label } from "@/registry/web/ui";

export const code = `import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Label } from "@/components/ui/label";

export default function SizesExample() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Label>Small (sm) - پیش‌فرض</Label>
        <NativeSelect size="sm">
          <NativeSelectOption value="sm">گزینه کوچک</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="space-y-2">
        <Label>Medium (md)</Label>
        <NativeSelect size="md">
          <NativeSelectOption value="md">گزینه متوسط</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="space-y-2">
        <Label>Large (lg)</Label>
        <NativeSelect size="lg">
          <NativeSelectOption value="lg">گزینه بزرگ</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  );
}
`;

export default function SizesExample() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Label>Small (sm) - پیش‌فرض</Label>
        <NativeSelect size="sm">
          <NativeSelectOption value="sm">گزینه کوچک</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="space-y-2">
        <Label>Medium (md)</Label>
        <NativeSelect size="md">
          <NativeSelectOption value="md">گزینه متوسط</NativeSelectOption>
        </NativeSelect>
      </div>
      <div className="space-y-2">
        <Label>Large (lg)</Label>
        <NativeSelect size="lg">
          <NativeSelectOption value="lg">گزینه بزرگ</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  );
}
