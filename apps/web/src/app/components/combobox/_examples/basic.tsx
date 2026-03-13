"use client";

import {
  Combobox,
  ComboboxTrigger,
  ComboboxPopover,
  ComboboxOption,
  ComboboxNoOptions,
} from "@/registry/web/ui";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const;

export const code = `import {
  Combobox,
  ComboboxTrigger,
  ComboboxPopover,
  ComboboxOption,
  ComboboxNoOptions,
} from "@/components/ui/combobox";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const;

export default function BasicComboboxExample() {
  return (
    <Combobox items={frameworks}>
      <ComboboxTrigger className="w-full max-w-xs" />
      <ComboboxPopover>
        <ComboboxNoOptions>موردی یافت نشد.</ComboboxNoOptions>
        <ComboboxOption id="frameworks" />
      </ComboboxPopover>
    </Combobox>
  );
}
`;

export default function BasicComboboxExample() {
  return (
    <Combobox items={frameworks}>
      <ComboboxTrigger className="w-full max-w-xs" />
      <ComboboxPopover>
        <ComboboxNoOptions>موردی یافت نشد.</ComboboxNoOptions>
        <ComboboxOption id="frameworks" />
      </ComboboxPopover>
    </Combobox>
  );
}

