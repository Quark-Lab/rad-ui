"use client";

import {
  Combobox,
  ComboboxTrigger,
  ComboboxPopover,
  ComboboxOption,
  ComboboxNoOptions,
} from "@/registry/web/ui";

type Framework = {
  label: string;
  value: string;
};

const frameworks: Framework[] = [
  { label: "Next.js", value: "next" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt.js", value: "nuxt" },
];

export const code = `import {
  Combobox,
  ComboboxTrigger,
  ComboboxPopover,
  ComboboxOption,
  ComboboxNoOptions,
} from "@/components/ui/combobox";

type Framework = {
  label: string;
  value: string;
};

const frameworks: Framework[] = [
  { label: "Next.js", value: "next" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt", value: "nuxt" },
];

export default function CustomItemsComboboxExample() {
  return (
    <Combobox
      items={frameworks}
      itemToStringValue={(framework) => framework.label}
    >
      <ComboboxTrigger className="w-full max-w-xs" />
      <ComboboxPopover>
        <ComboboxNoOptions>موردی یافت نشد.</ComboboxNoOptions>
        <ComboboxOption id="frameworks" />
      </ComboboxPopover>
    </Combobox>
  );
}
`;

export default function CustomItemsComboboxExample() {
  return (
    <Combobox
      items={frameworks}
      itemToStringValue={(framework) => framework.label}
    >
      <ComboboxTrigger className="w-full max-w-xs" />
      <ComboboxPopover>
        <ComboboxNoOptions>موردی یافت نشد.</ComboboxNoOptions>
        <ComboboxOption id="frameworks" />
      </ComboboxPopover>
    </Combobox>
  );
}

