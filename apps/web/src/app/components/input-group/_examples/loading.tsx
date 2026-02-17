"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Label,
} from "@/registry/web/ui";
import { Loader2 } from "lucide-react";

export const code = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Loader2 } from "lucide-react";

export default function LoadingExample() {
  return (
    <div className="max-w-sm space-y-2">
      <Label>در حال ذخیره</Label>
      <InputGroup>
        <InputGroupInput placeholder="در حال ذخیره..." disabled />
        <InputGroupAddon align="inline-end">
          <Loader2 className="size-4 animate-spin" />
          <InputGroupText>ذخیره...</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
`;

export default function LoadingExample() {
  return (
    <div className="max-w-sm space-y-2">
      <Label>در حال ذخیره</Label>
      <InputGroup>
        <InputGroupInput placeholder="در حال ذخیره..." disabled />
        <InputGroupAddon align="inline-end">
          <Loader2 className="size-4 animate-spin" />
          <InputGroupText>ذخیره...</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
