"use client";

import { Skeleton } from "@/registry/web/ui";

export const code = `import { Skeleton } from "@/components/ui/skeleton";

export default function AvatarWithTextExample() {
  return (
    <div className="flex items-center space-x-4 space-x-reverse">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
`;

export default function AvatarWithTextExample() {
  return (
    <div className="flex items-center space-x-4 space-x-reverse">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
