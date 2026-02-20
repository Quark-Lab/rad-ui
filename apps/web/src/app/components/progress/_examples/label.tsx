"use client";

import { Progress, Field, FieldLabel } from "@/registry/web/ui";

export const code = `import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

export default function LabelProgress() {
  return (
    <Field>
      <div className="flex items-center justify-between">
        <FieldLabel>پیشرفت آپلود</FieldLabel>
        <span className="text-sm text-muted-foreground">۶۶٪</span>
      </div>
      <Progress value={66} className="mt-2" />
    </Field>
  );
}`;

export default function LabelExample() {
  return (
    <Field>
      <div className="flex items-center justify-between">
        <FieldLabel>پیشرفت آپلود</FieldLabel>
        <span className="text-sm text-muted-foreground">۶۶٪</span>
      </div>
      <Progress value={66} className="mt-2" />
    </Field>
  );
}
