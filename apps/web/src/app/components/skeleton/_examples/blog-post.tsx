"use client";

import { Skeleton } from "@/registry/web/ui";

export const code = `import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostExample() {
  return (
    <div className="max-w-2xl space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <div className="flex items-center space-x-2 space-x-reverse">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
}
`;

export default function BlogPostExample() {
  return (
    <div className="max-w-2xl space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <div className="flex items-center space-x-2 space-x-reverse">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
}
