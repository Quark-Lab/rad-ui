"use client";

import { Button, Toaster, toast } from "@/registry/web/ui";

export const code = `import { Button } from "@/components/ui/button";
import { Toaster, toast } from "@/components/ui/sonner";

export default function SonnerBasicExample() {
  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </>
  );
}
`;

export default function BasicExample() {
  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </>
  );
}

