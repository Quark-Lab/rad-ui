"use client";

import * as React from "react";
import { GripHorizontal, GripVertical } from "lucide-react";
import {
  Group as PanelGroup,
  Panel,
  Separator as PanelResizeHandle,
} from "react-resizable-panels";

import { cn } from "../../lib/utils";

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof PanelGroup>) => (
  <PanelGroup className={cn("flex h-full w-full", className)} {...props} />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <PanelResizeHandle
    className={cn(
      // Default separator is vertical (between left/right panels).
      // For vertical stacks, the separator is horizontal via aria-orientation="horizontal".
      "relative flex w-px items-center justify-center bg-border",
      "after:absolute after:inset-y-0 after:start-1/2 after:w-4 after:-translate-x-1/2",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      // react-resizable-panels v4 uses aria-orientation on the separator element.
      "aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full",
      "aria-[orientation=horizontal]:after:inset-x-0 aria-[orientation=horizontal]:after:inset-y-auto aria-[orientation=horizontal]:after:h-4 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:-translate-x-0 aria-[orientation=horizontal]:after:-translate-y-0",
      className
    )}
    {...props}
  >
    {withHandle ? (
      <div className="z-10 flex h-5 w-4 items-center justify-center rounded-sm border border-border bg-background">
        <GripVertical className="h-3 w-3 text-muted-foreground aria-[orientation=horizontal]:hidden" />
        <GripHorizontal className="hidden h-3 w-3 text-muted-foreground aria-[orientation=horizontal]:block" />
      </div>
    ) : null}
  </PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

