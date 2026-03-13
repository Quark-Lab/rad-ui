"use client";

import * as React from "react";

import {
  Combobox,
  ComboboxTrigger,
  ComboboxPopover,
  ComboboxOption,
  ComboboxNoOptions,
} from "@/registry/web/ui";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const;

export const code = `"use client";

import * as React from "react";
import {
  Combobox,
  ComboboxTrigger,
  ComboboxPopover,
  ComboboxOption,
  ComboboxNoOptions,
} from "@/components/ui/combobox";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const;

export default function ControlledComboboxExample() {
  const [value, setValue] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col gap-3">
      <Combobox
        items={frameworks}
        value={value}
        onValueChange={setValue}
      >
        <ComboboxTrigger className="w-full max-w-xs" />
        <ComboboxPopover>
          <ComboboxNoOptions>موردی یافت نشد.</ComboboxNoOptions>
          <ComboboxOption id="frameworks" />
        </ComboboxPopover>
      </Combobox>
      <p className="text-sm text-muted-foreground">
        مقدار انتخاب شده: {value ?? "هیچ"}
      </p>
    </div>
  );
}
`;

export default function ControlledComboboxExample() {
  const [value, setValue] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col gap-3">
      <Combobox items={frameworks} value={value} onValueChange={setValue}>
        <ComboboxTrigger className="w-full max-w-xs" />
        <ComboboxPopover>
          <ComboboxNoOptions>موردی یافت نشد.</ComboboxNoOptions>
          <ComboboxOption id="frameworks" />
        </ComboboxPopover>
      </Combobox>
      <p className="text-sm text-muted-foreground">
        مقدار انتخاب شده: {value ?? "هیچ"}
      </p>
    </div>
  );
}

