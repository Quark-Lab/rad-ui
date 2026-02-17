"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Label,
} from "@/registry/web/ui";
import { Search } from "lucide-react";

export const code = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function BasicExample() {
  return (
    <div className="max-w-sm space-y-2">
      <Label>جستجو</Label>
      <InputGroup>
        <InputGroupInput placeholder="جستجو..." />
        <InputGroupAddon align="inline-end">
          <Search className="size-4" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
`;

export default function BasicExample() {
  return (
    <div className="max-w-sm space-y-2">
      <Label>جستجو</Label>
      <InputGroup>
        <InputGroupInput placeholder="جستجو..." />
        <InputGroupAddon align="inline-end">
          <Search className="size-4" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
