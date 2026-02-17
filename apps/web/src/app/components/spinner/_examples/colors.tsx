"use client";

import { Spinner } from "@/registry/web/ui";

export const code = `import { Spinner } from "@/components/ui/spinner";

export default function ColorsExample() {
  return (
    <div className="flex items-center gap-8 justify-center flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-primary" />
        <span className="text-xs text-muted-foreground">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-destructive" />
        <span className="text-xs text-muted-foreground">Destructive</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-blue-500" />
        <span className="text-xs text-muted-foreground">Blue</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-green-500" />
        <span className="text-xs text-muted-foreground">Green</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-purple-500" />
        <span className="text-xs text-muted-foreground">Purple</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-orange-500" />
        <span className="text-xs text-muted-foreground">Orange</span>
      </div>
    </div>
  );
}
`;

export default function ColorsExample() {
  return (
    <div className="flex items-center gap-8 justify-center flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-primary" />
        <span className="text-xs text-muted-foreground">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-destructive" />
        <span className="text-xs text-muted-foreground">Destructive</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-blue-500" />
        <span className="text-xs text-muted-foreground">Blue</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-green-500" />
        <span className="text-xs text-muted-foreground">Green</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-purple-500" />
        <span className="text-xs text-muted-foreground">Purple</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-orange-500" />
        <span className="text-xs text-muted-foreground">Orange</span>
      </div>
    </div>
  );
}
