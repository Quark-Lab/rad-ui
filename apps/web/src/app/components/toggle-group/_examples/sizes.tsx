"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/web/ui";
import { LayoutGrid, LayoutList, Rows3 } from "lucide-react";

export const code = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, LayoutList, Rows3 } from "lucide-react";

export default function SizesExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">Small:</span>
        <ToggleGroup type="single" size="sm" variant="outline">
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGrid className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <LayoutList className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="rows" aria-label="Rows view">
            <Rows3 className="h-3 w-3" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">Medium:</span>
        <ToggleGroup type="single" size="md" variant="outline">
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <LayoutList className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="rows" aria-label="Rows view">
            <Rows3 className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">Large:</span>
        <ToggleGroup type="single" size="lg" variant="outline">
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGrid className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <LayoutList className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="rows" aria-label="Rows view">
            <Rows3 className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
`;

export default function SizesExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">Small:</span>
        <ToggleGroup type="single" size="sm" variant="outline">
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGrid className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <LayoutList className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="rows" aria-label="Rows view">
            <Rows3 className="h-3 w-3" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">Medium:</span>
        <ToggleGroup type="single" size="md" variant="outline">
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <LayoutList className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="rows" aria-label="Rows view">
            <Rows3 className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-20">Large:</span>
        <ToggleGroup type="single" size="lg" variant="outline">
          <ToggleGroupItem value="grid" aria-label="Grid view">
            <LayoutGrid className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <LayoutList className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="rows" aria-label="Rows view">
            <Rows3 className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
