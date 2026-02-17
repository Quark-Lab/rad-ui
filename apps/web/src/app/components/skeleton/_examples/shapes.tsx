"use client";

import { Skeleton } from "@/registry/web/ui";

export const code = `import { Skeleton } from "@/components/ui/skeleton";

export default function ShapesExample() {
  return (
    <div className="space-y-8">
      {/* Circle */}
      <div>
        <h3 className="text-lg font-medium mb-3">دایره (Circle)</h3>
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-16 w-16 rounded-full" />
          <Skeleton className="h-20 w-20 rounded-full" />
        </div>
      </div>

      {/* Rectangle */}
      <div>
        <h3 className="text-lg font-medium mb-3">مستطیل (Rectangle)</h3>
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>

      {/* Card */}
      <div>
        <h3 className="text-lg font-medium mb-3">کارت (Card)</h3>
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      </div>
    </div>
  );
}
`;

export default function ShapesExample() {
  return (
    <div className="space-y-8">
      {/* Circle */}
      <div>
        <h3 className="text-lg font-medium mb-3">دایره (Circle)</h3>
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-16 w-16 rounded-full" />
          <Skeleton className="h-20 w-20 rounded-full" />
        </div>
      </div>

      {/* Rectangle */}
      <div>
        <h3 className="text-lg font-medium mb-3">مستطیل (Rectangle)</h3>
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>

      {/* Card */}
      <div>
        <h3 className="text-lg font-medium mb-3">کارت (Card)</h3>
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      </div>
    </div>
  );
}
