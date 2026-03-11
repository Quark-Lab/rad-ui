"use client";

import { Button, ButtonGroup, Input } from "@/registry/web/ui";

export const code = `import { Button, ButtonGroup, Input } from "@/components/ui/button-group";

export default function InputExample() {
  return (
    <ButtonGroup>
      <Button variant="outline">جستجو</Button>
      <Input placeholder="عبارت مورد نظر را وارد کنید..." className="max-w-xs" />
    </ButtonGroup>
  );
}
`;

export default function InputExample() {
  return (
    <ButtonGroup>
      <Button variant="outline">جستجو</Button>
      <Input
        placeholder="عبارت مورد نظر را وارد کنید..."
        className="max-w-xs"
      />
    </ButtonGroup>
  );
}

