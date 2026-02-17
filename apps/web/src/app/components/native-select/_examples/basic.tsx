"use client";

import { NativeSelect, NativeSelectOption } from "@/registry/web/ui";

export const code = `import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export default function BasicExample() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">انتخاب کنید...</NativeSelectOption>
      <NativeSelectOption value="option1">گزینه ۱</NativeSelectOption>
      <NativeSelectOption value="option2">گزینه ۲</NativeSelectOption>
      <NativeSelectOption value="option3">گزینه ۳</NativeSelectOption>
    </NativeSelect>
  );
}
`;

export default function BasicExample() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">انتخاب کنید...</NativeSelectOption>
      <NativeSelectOption value="option1">گزینه ۱</NativeSelectOption>
      <NativeSelectOption value="option2">گزینه ۲</NativeSelectOption>
      <NativeSelectOption value="option3">گزینه ۳</NativeSelectOption>
    </NativeSelect>
  );
}
