"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/web/ui";
import { Bold, Italic, Underline } from "lucide-react";

export const code = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export default function InteractiveExample() {
  return (
    <div className="space-y-4">
      <ToggleGroup
        type="multiple"
        variant="outline"
        onValueChange={(value) =>
          console.log("Selected formatting:", value)
        }
      >
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold className="ms-2 h-4 w-4" />
          پررنگ
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic className="ms-2 h-4 w-4" />
          کج
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline className="ms-2 h-4 w-4" />
          زیرخط
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-sm text-muted-foreground">
        گزینه‌های انتخاب شده را در کنسول مشاهده کنید
      </p>
    </div>
  );
}
`;

export default function InteractiveExample() {
  return (
    <div className="space-y-4">
      <ToggleGroup
        type="multiple"
        variant="outline"
        onValueChange={(value) =>
          console.log("Selected formatting:", value)
        }
      >
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold className="ms-2 h-4 w-4" />
          پررنگ
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic className="ms-2 h-4 w-4" />
          کج
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline className="ms-2 h-4 w-4" />
          زیرخط
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-sm text-muted-foreground">
        گزینه‌های انتخاب شده را در کنسول مشاهده کنید
      </p>
    </div>
  );
}
