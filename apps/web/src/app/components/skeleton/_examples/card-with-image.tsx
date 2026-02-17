"use client";

import { Skeleton } from "@/registry/web/ui";

export const code = `import { Skeleton } from "@/components/ui/skeleton";

export default function CardWithImageExample() {
  return (
    <div className="flex flex-col space-y-3 max-w-sm">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}
`;

export default function CardWithImageExample() {
  return (
    <div className="flex flex-col space-y-3 max-w-sm">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}
