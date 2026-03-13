"use client";

export const code = `import {
  Combobox,
  ComboboxTrigger,
  ComboboxPopover,
  ComboboxOption,
  ComboboxNoOptions,
} from "@/components/ui/combobox";

const languages = ["TypeScript", "JavaScript", "Python", "Go", "Rust"] as const;

export default function ComboboxUsageExample() {
  return (
    <Combobox items={languages}>
      <ComboboxTrigger className="w-full max-w-xs" />
      <ComboboxPopover>
        <ComboboxNoOptions>موردی یافت نشد.</ComboboxNoOptions>
        <ComboboxOption id="languages" />
      </ComboboxPopover>
    </Combobox>
  );
}
`;

export default function ComboboxUsageExample() {
  return null;
}

