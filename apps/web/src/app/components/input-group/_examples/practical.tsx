"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupButton,
  InputGroupTextarea,
  Label,
  Button,
} from "@/registry/web/ui";
import { Globe, Copy } from "lucide-react";

export const code = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Globe, Copy } from "lucide-react";

export default function PracticalExample() {
  return (
    <form className="max-w-md space-y-4">
      <div className="space-y-2">
        <Label>نام کامل</Label>
        <InputGroup>
          <InputGroupInput placeholder="نام و نام خانوادگی" />
          <InputGroupAddon align="inline-start">
            <Globe className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>ایمیل</Label>
        <InputGroup>
          <InputGroupInput placeholder="user" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@company.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
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
        <Label>توضیحات</Label>
        <InputGroup className="flex-col">
          <InputGroupTextarea
            placeholder="توضیحات را بنویسید..."
            rows={3}
          />
          <InputGroupAddon align="block-end">
            <InputGroupText className="flex-1">
              حداکثر ۵۰۰ کاراکتر
            </InputGroupText>
            <InputGroupButton>
              <Copy className="size-3.5" />
              کپی
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <Button variant="outline" type="button">
          لغو
        </Button>
        <Button type="submit">ذخیره</Button>
      </div>
    </form>
  );
}
`;

export default function PracticalExample() {
  return (
    <form className="max-w-md space-y-4">
      <div className="space-y-2">
        <Label>نام کامل</Label>
        <InputGroup>
          <InputGroupInput placeholder="نام و نام خانوادگی" />
          <InputGroupAddon align="inline-start">
            <Globe className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label>ایمیل</Label>
        <InputGroup>
          <InputGroupInput placeholder="user" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@company.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
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
        <Label>توضیحات</Label>
        <InputGroup className="flex-col">
          <InputGroupTextarea
            placeholder="توضیحات را بنویسید..."
            rows={3}
          />
          <InputGroupAddon align="block-end">
            <InputGroupText className="flex-1">
              حداکثر ۵۰۰ کاراکتر
            </InputGroupText>
            <InputGroupButton>
              <Copy className="size-3.5" />
              کپی
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <Button variant="outline" type="button">
          لغو
        </Button>
        <Button type="submit">ذخیره</Button>
      </div>
    </form>
  );
}
