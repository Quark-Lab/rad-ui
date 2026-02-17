"use client";

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
  FieldGroup,
  RadioGroup,
  RadioGroupItem,
} from "@/registry/web/ui";

export const code = `import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
  FieldGroup,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioExample() {
  return (
    <div className="max-w-md">
      <FieldSet>
        <FieldLegend>طرح اشتراک</FieldLegend>
        <FieldDescription>
          طرح‌های سالانه و مادام‌العمر تخفیف قابل توجهی دارند.
        </FieldDescription>
        <RadioGroup defaultValue="monthly">
          <FieldGroup>
            <Field orientation="horizontal">
              <RadioGroupItem value="monthly" id="radio-monthly" />
              <FieldLabel htmlFor="radio-monthly">
                ماهانه (۹۹,۰۰۰ تومان/ماه)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="yearly" id="radio-yearly" />
              <FieldLabel htmlFor="radio-yearly">
                سالانه (۹۹۰,۰۰۰ تومان/سال)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="lifetime" id="radio-lifetime" />
              <FieldLabel htmlFor="radio-lifetime">
                مادام‌العمر (۲,۹۹۰,۰۰۰ تومان)
              </FieldLabel>
            </Field>
          </FieldGroup>
        </RadioGroup>
      </FieldSet>
    </div>
  );
}
`;

export default function RadioExample() {
  return (
    <div className="max-w-md">
      <FieldSet>
        <FieldLegend>طرح اشتراک</FieldLegend>
        <FieldDescription>
          طرح‌های سالانه و مادام‌العمر تخفیف قابل توجهی دارند.
        </FieldDescription>
        <RadioGroup defaultValue="monthly">
          <FieldGroup>
            <Field orientation="horizontal">
              <RadioGroupItem value="monthly" id="radio-monthly" />
              <FieldLabel htmlFor="radio-monthly">
                ماهانه (۹۹,۰۰۰ تومان/ماه)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="yearly" id="radio-yearly" />
              <FieldLabel htmlFor="radio-yearly">
                سالانه (۹۹۰,۰۰۰ تومان/سال)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="lifetime" id="radio-lifetime" />
              <FieldLabel htmlFor="radio-lifetime">
                مادام‌العمر (۲,۹۹۰,۰۰۰ تومان)
              </FieldLabel>
            </Field>
          </FieldGroup>
        </RadioGroup>
      </FieldSet>
    </div>
  );
}
