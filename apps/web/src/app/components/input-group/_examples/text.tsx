"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Label,
} from "@/registry/web/ui";

export const code = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export default function TextExample() {
  return (
    <div className="max-w-sm space-y-4">
      <div className="space-y-2">
        <Label>آدرس وب‌سایت</Label>
        <InputGroup>
          <InputGroupInput placeholder="example.com" />
          <InputGroupAddon align="inline-start">
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>ایمیل شرکت</Label>
        <InputGroup>
          <InputGroupInput placeholder="نام کاربری" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@company.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>قیمت</Label>
        <InputGroup>
          <InputGroupInput placeholder="0" type="number" />
          <InputGroupAddon align="inline-start">
            <InputGroupText>تومان</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
`;

export default function TextExample() {
  return (
    <div className="max-w-sm space-y-4">
      <div className="space-y-2">
        <Label>آدرس وب‌سایت</Label>
        <InputGroup>
          <InputGroupInput placeholder="example.com" />
          <InputGroupAddon align="inline-start">
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>ایمیل شرکت</Label>
        <InputGroup>
          <InputGroupInput placeholder="نام کاربری" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@company.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>قیمت</Label>
        <InputGroup>
          <InputGroupInput placeholder="0" type="number" />
          <InputGroupAddon align="inline-start">
            <InputGroupText>تومان</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
