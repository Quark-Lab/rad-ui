"use client";

import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupButton,
  Label,
} from "@/registry/web/ui";
import { Search, Eye, EyeOff } from "lucide-react";

export const code = `import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Search, Eye, EyeOff } from "lucide-react";

export default function ButtonExample() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-sm space-y-4">
      <div className="space-y-2">
        <Label>جستجوی وب‌سایت</Label>
        <InputGroup>
          <InputGroupInput placeholder="جستجو..." />
          <InputGroupAddon align="inline-start">
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton>
              <Search className="size-3.5" />
              جستجو
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>رمز عبور</Label>
        <InputGroup>
          <InputGroupInput
            type={showPassword ? "text" : "password"}
            placeholder="رمز عبور"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              aria-label={showPassword ? "مخفی کردن" : "نمایش"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="size-3.5" />
              ) : (
                <Eye className="size-3.5" />
              )}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
`;

export default function ButtonExample() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-sm space-y-4">
      <div className="space-y-2">
        <Label>جستجوی وب‌سایت</Label>
        <InputGroup>
          <InputGroupInput placeholder="جستجو..." />
          <InputGroupAddon align="inline-start">
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton>
              <Search className="size-3.5" />
              جستجو
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>رمز عبور</Label>
        <InputGroup>
          <InputGroupInput
            type={showPassword ? "text" : "password"}
            placeholder="رمز عبور"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              aria-label={showPassword ? "مخفی کردن" : "نمایش"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="size-3.5" />
              ) : (
                <Eye className="size-3.5" />
              )}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
