"use client";

import { Field, FieldLabel, FieldDescription, Textarea } from "@/registry/web/ui";

export const code = `import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaExample() {
  return (
    <div className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="field-feedback">بازخورد</FieldLabel>
        <Textarea
          id="field-feedback"
          placeholder="نظر خود را بنویسید..."
          rows={4}
        />
        <FieldDescription>
          نظرات خود درباره خدمات ما را با ما به اشتراک بگذارید.
        </FieldDescription>
      </Field>
    </div>
  );
}
`;

export default function TextareaExample() {
  return (
    <div className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="field-feedback">بازخورد</FieldLabel>
        <Textarea
          id="field-feedback"
          placeholder="نظر خود را بنویسید..."
          rows={4}
        />
        <FieldDescription>
          نظرات خود درباره خدمات ما را با ما به اشتراک بگذارید.
        </FieldDescription>
      </Field>
    </div>
  );
}
