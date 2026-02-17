"use client";

import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupText,
  InputGroupButton,
  Label,
} from "@/registry/web/ui";
import { Search, Mail, Copy } from "lucide-react";

export const code = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupText,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Search, Mail, Copy } from "lucide-react";

export default function AlignmentExample() {
  return (
    <div className="space-y-8">
      {/* inline-start */}
      <div className="max-w-sm space-y-2">
        <Label>ایمیل (inline-start)</Label>
        <InputGroup>
          <InputGroupInput placeholder="ایمیل خود را وارد کنید" />
          <InputGroupAddon align="inline-start">
            <Mail className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* inline-end */}
      <div className="max-w-sm space-y-2">
        <Label>جستجو (inline-end)</Label>
        <InputGroup>
          <InputGroupInput placeholder="جستجو..." />
          <InputGroupAddon align="inline-end">
            <Search className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* block-start */}
      <div className="max-w-sm space-y-2">
        <Label>ناحیه متن (block-start)</Label>
        <InputGroup className="flex-col">
          <InputGroupTextarea
            placeholder="پیام خود را بنویسید..."
            rows={3}
          />
          <InputGroupAddon align="block-start">
            <InputGroupText>script.js</InputGroupText>
            <InputGroupButton>
              <Copy className="size-3.5" />
              کپی
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* block-end */}
      <div className="max-w-sm space-y-2">
        <Label>ناحیه متن (block-end)</Label>
        <InputGroup className="flex-col">
          <InputGroupTextarea
            placeholder="پیام خود را بنویسید..."
            rows={3}
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>
              ۰/۲۸۰
            </InputGroupText>
            <InputGroupButton>ارسال</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
`;

export default function AlignmentExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 280;

  return (
    <div className="space-y-8 w-full">
      {/* inline-start */}
      <div className="max-w-sm space-y-2">
        <Label>ایمیل (inline-start)</Label>
        <InputGroup>
          <InputGroupInput placeholder="ایمیل خود را وارد کنید" />
          <InputGroupAddon align="inline-start">
            <Mail className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* inline-end */}
      <div className="max-w-sm space-y-2">
        <Label>جستجو (inline-end)</Label>
        <InputGroup>
          <InputGroupInput placeholder="جستجو..." />
          <InputGroupAddon align="inline-end">
            <Search className="size-4" />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* block-start */}
      <div className="max-w-sm space-y-2">
        <Label>ناحیه متن (block-start)</Label>
        <InputGroup className="flex-col">
          <InputGroupTextarea
            placeholder="پیام خود را بنویسید..."
            rows={3}
          />
          <InputGroupAddon align="block-start">
            <InputGroupText>script.js</InputGroupText>
            <InputGroupButton>
              <Copy className="size-3.5" />
              کپی
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* block-end */}
      <div className="max-w-sm space-y-2">
        <Label>ناحیه متن (block-end)</Label>
        <InputGroup className="flex-col">
          <InputGroupTextarea
            placeholder="پیام خود را بنویسید..."
            rows={3}
            maxLength={maxChars}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCharCount(e.target.value.length);
            }}
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>
              {charCount}/{maxChars}
            </InputGroupText>
            <InputGroupButton>ارسال</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
