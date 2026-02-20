"use client";

import { Progress } from "@/registry/web/ui";

export const code = `import { Progress } from "@/components/ui/progress";

export default function MyComponent() {
  return <Progress value={60} />;
}`;

export default function UsageExample() {
  return <Progress value={60} />;
}
