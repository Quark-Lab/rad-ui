"use client";

import { Field, FieldLabel, Switch } from "@/registry/web/ui";

export const code = `import { Field, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export default function SwitchExample() {
  return (
    <div className="max-w-sm">
      <Field orientation="horizontal">
        <Switch id="switch-mfa" />
        <FieldLabel htmlFor="switch-mfa">
          احراز هویت دو مرحله‌ای
        </FieldLabel>
      </Field>
    </div>
  );
}
`;

export default function SwitchExample() {
  return (
    <div className="max-w-sm">
      <Field orientation="horizontal">
        <Switch id="switch-mfa" />
        <FieldLabel htmlFor="switch-mfa">
          احراز هویت دو مرحله‌ای
        </FieldLabel>
      </Field>
    </div>
  );
}
