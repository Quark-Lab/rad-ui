"use client";

import { useState } from "react";
import { Toggle } from "@/registry/web/ui";
import { Bold, Italic, Underline } from "lucide-react";

export const code = `import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export default function FormattingToolbarExample() {
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  return (
    <div className="flex gap-1 p-1 border rounded-lg w-fit">
      <Toggle
        pressed={formatting.bold}
        onPressedChange={(pressed) =>
          setFormatting({ ...formatting, bold: pressed })
        }
        variant="ghost"
        size="sm"
        aria-label="Toggle bold"
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={formatting.italic}
        onPressedChange={(pressed) =>
          setFormatting({ ...formatting, italic: pressed })
        }
        variant="ghost"
        size="sm"
        aria-label="Toggle italic"
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={formatting.underline}
        onPressedChange={(pressed) =>
          setFormatting({ ...formatting, underline: pressed })
        }
        variant="ghost"
        size="sm"
        aria-label="Toggle underline"
      >
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  );
}
`;

export default function FormattingToolbarExample() {
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  return (
    <div className="flex gap-1 p-1 border rounded-lg w-fit">
      <Toggle
        pressed={formatting.bold}
        onPressedChange={(pressed) =>
          setFormatting({ ...formatting, bold: pressed })
        }
        variant="ghost"
        size="sm"
        aria-label="Toggle bold"
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={formatting.italic}
        onPressedChange={(pressed) =>
          setFormatting({ ...formatting, italic: pressed })
        }
        variant="ghost"
        size="sm"
        aria-label="Toggle italic"
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={formatting.underline}
        onPressedChange={(pressed) =>
          setFormatting({ ...formatting, underline: pressed })
        }
        variant="ghost"
        size="sm"
        aria-label="Toggle underline"
      >
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  );
}
