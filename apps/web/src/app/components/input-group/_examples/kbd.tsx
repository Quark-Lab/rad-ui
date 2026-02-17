"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Label,
  Kbd,
} from "@/registry/web/ui";

export const code = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";

export default function KbdExample() {
  return (
    <div className="max-w-sm space-y-2">
      <Label>جستجوی سریع</Label>
      <InputGroup>
        <InputGroupInput placeholder="جستجو..." />
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
`;

export default function KbdExample() {
  return (
    <div className="max-w-sm space-y-2">
      <Label>جستجوی سریع</Label>
      <InputGroup>
        <InputGroupInput placeholder="جستجو..." />
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
