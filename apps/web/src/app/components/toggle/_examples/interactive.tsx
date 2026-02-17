"use client";

import { Toggle } from "@/registry/web/ui";
import { Bold, Italic, Underline } from "lucide-react";

export const code = `import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export default function InteractiveExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Toggle
        variant="outline"
        onPressedChange={(pressed) =>
          console.log("Italic:", pressed ? "فعال" : "غیرفعال")
        }
        aria-label="Toggle italic"
      >
        <Italic className="ms-2 h-4 w-4" />
        کج
      </Toggle>
      <Toggle
        variant="outline"
        onPressedChange={(pressed) =>
          console.log("Bold:", pressed ? "فعال" : "غیرفعال")
        }
        aria-label="Toggle bold"
      >
        <Bold className="ms-2 h-4 w-4" />
        پررنگ
      </Toggle>
      <Toggle
        variant="outline"
        onPressedChange={(pressed) =>
          console.log("Underline:", pressed ? "فعال" : "غیرفعال")
        }
        aria-label="Toggle underline"
      >
        <Underline className="ms-2 h-4 w-4" />
        زیرخط
      </Toggle>
    </div>
  );
}
`;

export default function InteractiveExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Toggle
        variant="outline"
        onPressedChange={(pressed) =>
          console.log("Italic:", pressed ? "فعال" : "غیرفعال")
        }
        aria-label="Toggle italic"
      >
        <Italic className="ms-2 h-4 w-4" />
        کج
      </Toggle>
      <Toggle
        variant="outline"
        onPressedChange={(pressed) =>
          console.log("Bold:", pressed ? "فعال" : "غیرفعال")
        }
        aria-label="Toggle bold"
      >
        <Bold className="ms-2 h-4 w-4" />
        پررنگ
      </Toggle>
      <Toggle
        variant="outline"
        onPressedChange={(pressed) =>
          console.log("Underline:", pressed ? "فعال" : "غیرفعال")
        }
        aria-label="Toggle underline"
      >
        <Underline className="ms-2 h-4 w-4" />
        زیرخط
      </Toggle>
    </div>
  );
}
