"use client";

import { NativeSelect, NativeSelectOption, Label } from "@/registry/web/ui";

export const code = `import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Label } from "@/components/ui/label";

export default function DisabledExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="disabled">غیرفعال</Label>
      <NativeSelect id="disabled" disabled>
        <NativeSelectOption value="">این فیلد غیرفعال است</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
`;

export default function DisabledExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="disabled">غیرفعال</Label>
      <NativeSelect id="disabled" disabled>
        <NativeSelectOption value="">این فیلد غیرفعال است</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
