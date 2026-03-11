"use client";

import { ChevronDown } from "lucide-react";

import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/web/ui";

export const code = `import { ChevronDown } from "lucide-react";
import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

export default function SplitExample() {
  return (
    <ButtonGroup>
      <Button>اقدام اصلی</Button>
      <ButtonGroupSeparator />
      <Button variant="outline" aria-label="گزینه‌های بیشتر">
        <ChevronDown className="w-4 h-4" />
      </Button>
    </ButtonGroup>
  );
}
`;

export default function SplitExample() {
  return (
    <ButtonGroup>
      <Button>اقدام اصلی</Button>
      <ButtonGroupSeparator />
      <Button variant="outline" aria-label="گزینه‌های بیشتر">
        <ChevronDown className="w-4 h-4" />
      </Button>
    </ButtonGroup>
  );
}

