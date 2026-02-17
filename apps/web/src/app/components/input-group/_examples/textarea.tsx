"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
  InputGroupText,
  InputGroupButton,
  Label,
} from "@/registry/web/ui";

export const code = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
  InputGroupText,
  InputGroupButton,
} from "@/components/ui/input-group";

export default function TextareaExample() {
  return (
    <div className="max-w-sm space-y-2">
      <Label>پیام</Label>
      <InputGroup className="flex-col">
        <InputGroupTextarea
          placeholder="پیام خود را بنویسید..."
          rows={4}
        />
        <InputGroupAddon align="block-end">
          <InputGroupText>۰/۲۸۰</InputGroupText>
          <InputGroupButton>ارسال</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
`;

export default function TextareaExample() {
  return (
    <div className="max-w-sm space-y-2">
      <Label>پیام</Label>
      <InputGroup className="flex-col">
        <InputGroupTextarea
          placeholder="پیام خود را بنویسید..."
          rows={4}
        />
        <InputGroupAddon align="block-end">
          <InputGroupText>۰/۲۸۰</InputGroupText>
          <InputGroupButton>ارسال</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
