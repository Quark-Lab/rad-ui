"use client";

import { NativeSelect, NativeSelectOption, Label } from "@/registry/web/ui";

export const code = `import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Label } from "@/components/ui/label";

export default function ValidationExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="invalid" className="text-destructive">
        انتخاب نامعتبر
      </Label>
      <NativeSelect
        id="invalid"
        aria-invalid="true"
        className="border-destructive focus-visible:ring-destructive"
      >
        <NativeSelectOption value="">انتخاب کنید...</NativeSelectOption>
        <NativeSelectOption value="1">گزینه ۱</NativeSelectOption>
        <NativeSelectOption value="2">گزینه ۲</NativeSelectOption>
      </NativeSelect>
      <p className="text-sm text-destructive">
        لطفاً یک گزینه معتبر انتخاب کنید.
      </p>
    </div>
  );
}
`;

export default function ValidationExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="invalid" className="text-destructive">
        انتخاب نامعتبر
      </Label>
      <NativeSelect
        id="invalid"
        aria-invalid="true"
        className="border-destructive focus-visible:ring-destructive"
      >
        <NativeSelectOption value="">انتخاب کنید...</NativeSelectOption>
        <NativeSelectOption value="1">گزینه ۱</NativeSelectOption>
        <NativeSelectOption value="2">گزینه ۲</NativeSelectOption>
      </NativeSelect>
      <p className="text-sm text-destructive">
        لطفاً یک گزینه معتبر انتخاب کنید.
      </p>
    </div>
  );
}
