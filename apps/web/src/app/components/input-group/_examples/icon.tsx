"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Label,
} from "@/registry/web/ui";
import { Search, Mail } from "lucide-react";

export const code = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search, Mail } from "lucide-react";

export default function IconExample() {
  return (
    <div className="max-w-sm space-y-4">
      <div className="space-y-2">
        <Label>جستجو</Label>
        <InputGroup>
          <InputGroupInput placeholder="جستجو..." />
          <InputGroupAddon align="inline-start">
            <Search className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>ایمیل</Label>
        <InputGroup>
          <InputGroupInput placeholder="user@example.com" />
          <InputGroupAddon align="inline-end">
            <Mail className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
`;

export default function IconExample() {
  return (
    <div className="max-w-sm space-y-4">
      <div className="space-y-2">
        <Label>جستجو</Label>
        <InputGroup>
          <InputGroupInput placeholder="جستجو..." />
          <InputGroupAddon align="inline-start">
            <Search className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>ایمیل</Label>
        <InputGroup>
          <InputGroupInput placeholder="user@example.com" />
          <InputGroupAddon align="inline-end">
            <Mail className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
