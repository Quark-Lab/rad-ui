"use client";

import { Toggle } from "@/registry/web/ui";

export const code = `import { Toggle } from "@/components/ui/toggle";

export default function CustomStylingExample() {
  return (
    <Toggle className="data-[state=on]:bg-green-500 data-[state=on]:text-white data-[state=on]:hover:bg-green-600 data-[state=on]:hover:text-white">
      سفارشی
    </Toggle>
  );
}
`;

export default function CustomStylingExample() {
  return (
    <Toggle className="data-[state=on]:bg-green-500 data-[state=on]:text-white data-[state=on]:hover:bg-green-600 data-[state=on]:hover:text-white">
      سفارشی
    </Toggle>
  );
}
