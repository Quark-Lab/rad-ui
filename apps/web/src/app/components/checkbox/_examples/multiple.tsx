"use client";

import { useState } from "react";
import { Checkbox, Label } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function MultipleExample() {
  const [items, setItems] = useState([
    { id: "item1", label: "گزینه ۱", checked: false },
    { id: "item2", label: "گزینه ۲", checked: false },
    { id: "item3", label: "گزینه ۳", checked: false },
  ]);

  const allChecked = items.length > 0 && items.every((item) => item.checked);
  const isIndeterminate =
    items.some((item) => item.checked) && !allChecked;

  const toggleAll = (checked: boolean) => {
    setItems(items.map((item) => ({ ...item, checked })));
  };

  const toggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 space-x-reverse border-b border-border pb-2">
        <Checkbox
          id="select-all"
          checked={allChecked ? true : isIndeterminate ? "indeterminate" : false}
          onCheckedChange={(checked) => toggleAll(checked as boolean)}
        />
        <Label htmlFor="select-all" className="cursor-pointer font-bold">
          انتخاب همه
        </Label>
      </div>
      <div className="flex flex-col gap-3 me-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2 space-x-reverse">
            <Checkbox
              id={item.id}
              checked={item.checked}
              onCheckedChange={() => toggleItem(item.id)}
            />
            <Label htmlFor={item.id} className="cursor-pointer">
              {item.label}
            </Label>
          </div>
        ))}
      </div>
      <div className="text-sm text-muted-foreground pt-2">
        {items.filter(i => i.checked).length} گزینه انتخاب شده
      </div>
    </div>
  );
}
`;

export default function MultipleExample() {
  const [items, setItems] = useState([
    { id: "item1", label: "گزینه ۱", checked: false },
    { id: "item2", label: "گزینه ۲", checked: false },
    { id: "item3", label: "گزینه ۳", checked: false },
  ]);

  const allChecked = items.length > 0 && items.every((item) => item.checked);
  const isIndeterminate =
    items.some((item) => item.checked) && !allChecked;

  const toggleAll = (checked: boolean) => {
    setItems(items.map((item) => ({ ...item, checked })));
  };

  const toggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 space-x-reverse border-b border-border pb-2">
        <Checkbox
          id="select-all"
          checked={allChecked ? true : isIndeterminate ? "indeterminate" : false}
          onCheckedChange={(checked) => toggleAll(checked as boolean)}
        />
        <Label htmlFor="select-all" className="cursor-pointer font-bold">
          انتخاب همه
        </Label>
      </div>
      <div className="flex flex-col gap-3 me-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2 space-x-reverse">
            <Checkbox
              id={item.id}
              checked={item.checked}
              onCheckedChange={() => toggleItem(item.id)}
            />
            <Label htmlFor={item.id} className="cursor-pointer">
              {item.label}
            </Label>
          </div>
        ))}
      </div>
      <div className="text-sm text-muted-foreground pt-2">
        {items.filter(i => i.checked).length} گزینه انتخاب شده
      </div>
    </div>
  );
}
