"use client";

import { Button, ButtonGroup } from "@/registry/web/ui";

export const code = `import { Button, ButtonGroup } from "@/components/ui/button-group";

export default function OrientationExample() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup orientation="horizontal">
        <Button>چپ</Button>
        <Button>وسط</Button>
        <Button>راست</Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical">
        <Button>بالا</Button>
        <Button>وسط</Button>
        <Button>پایین</Button>
      </ButtonGroup>
    </div>
  );
}
`;

export default function OrientationExample() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup orientation="horizontal">
        <Button>چپ</Button>
        <Button>وسط</Button>
        <Button>راست</Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical">
        <Button>بالا</Button>
        <Button>وسط</Button>
        <Button>پایین</Button>
      </ButtonGroup>
    </div>
  );
}

