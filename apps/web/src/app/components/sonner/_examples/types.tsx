"use client";

import { Button, Toaster, toast } from "@/registry/web/ui";

export const code = `"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/sonner"

export default function SonnerTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("Event has been created")}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success("Event has been created")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.info("Be at the area 10 minutes before the event time")}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Event start time cannot be earlier than 8am")}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error("Event has not been created")}>
        Error
      </Button>
    </div>
  )
}
`;

export default function TypesExample() {
  return (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast("Event has been created")}>
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("Event has been created")}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("Be at the area 10 minutes before the event time")
          }
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("Event start time cannot be earlier than 8am")
          }
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("Event has not been created")}
        >
          Error
        </Button>
      </div>
    </>
  );
}

