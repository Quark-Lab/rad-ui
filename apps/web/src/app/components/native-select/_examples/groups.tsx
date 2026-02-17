"use client";

import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
  Label,
} from "@/registry/web/ui";

export const code = `import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@/components/ui/native-select";
import { Label } from "@/components/ui/label";

export default function GroupsExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="cars">انتخاب خودرو</Label>
      <NativeSelect id="cars">
        <NativeSelectOption value="">انتخاب کنید...</NativeSelectOption>
        <NativeSelectOptGroup label="آلمانی">
          <NativeSelectOption value="mercedes">مرسدس بنز</NativeSelectOption>
          <NativeSelectOption value="bmw">بی‌ام‌و</NativeSelectOption>
          <NativeSelectOption value="audi">آئودی</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="ژاپنی">
          <NativeSelectOption value="toyota">تویوتا</NativeSelectOption>
          <NativeSelectOption value="honda">هوندا</NativeSelectOption>
          <NativeSelectOption value="nissan">نیسان</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  );
}
`;

export default function GroupsExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="cars">انتخاب خودرو</Label>
      <NativeSelect id="cars">
        <NativeSelectOption value="">انتخاب کنید...</NativeSelectOption>
        <NativeSelectOptGroup label="آلمانی">
          <NativeSelectOption value="mercedes">مرسدس بنز</NativeSelectOption>
          <NativeSelectOption value="bmw">بی‌ام‌و</NativeSelectOption>
          <NativeSelectOption value="audi">آئودی</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="ژاپنی">
          <NativeSelectOption value="toyota">تویوتا</NativeSelectOption>
          <NativeSelectOption value="honda">هوندا</NativeSelectOption>
          <NativeSelectOption value="nissan">نیسان</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  );
}
