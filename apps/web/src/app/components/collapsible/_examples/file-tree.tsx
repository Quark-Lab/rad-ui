"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/web/ui";
import { ChevronRight, File, Folder } from "lucide-react";

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] };

export const code = `import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight, File, Folder } from "lucide-react";

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] };

const fileTree: FileTreeItem[] = [
  {
    name: "components",
    items: [
      {
        name: "ui",
        items: [
          { name: "button.tsx" },
          { name: "card.tsx" },
          { name: "dialog.tsx" },
        ],
      },
    ],
  },
  { name: "app.tsx" },
  { name: "layout.tsx" },
];

function renderItem(item: FileTreeItem) {
  if ("items" in item) {
    return (
      <Collapsible key={item.name}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="group w-full justify-start gap-2 hover:bg-muted"
          >
            <ChevronRight className="w-4 h-4 transition-transform group-data-[state=open]:rotate-90" />
            <Folder className="w-4 h-4" />
            <span>{item.name}</span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="ps-6">
          <div className="flex flex-col gap-1">
            {item.items.map((child) => renderItem(child))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Button
      key={item.name}
      variant="link"
      size="sm"
      className="w-full justify-start gap-2 text-foreground"
    >
      <File className="w-4 h-4" />
      <span>{item.name}</span>
    </Button>
  );
}

export default function CollapsibleFileTreeExample() {
  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <Tabs defaultValue="explorer">
          <TabsList className="w-full">
            <TabsTrigger value="explorer">Explorer</TabsTrigger>
            <TabsTrigger value="outline">Outline</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </Card>
  );
}
`;

const fileTree: FileTreeItem[] = [
  {
    name: "components",
    items: [
      {
        name: "ui",
        items: [
          { name: "button.tsx" },
          { name: "card.tsx" },
          { name: "dialog.tsx" },
        ],
      },
    ],
  },
  { name: "app.tsx" },
  { name: "layout.tsx" },
];

function renderItem(item: FileTreeItem) {
  if ("items" in item) {
    return (
      <Collapsible key={item.name}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="group w-full justify-start gap-2 hover:bg-muted"
          >
            <ChevronRight className="w-4 h-4 transition-transform group-data-[state=open]:rotate-90" />
            <Folder className="w-4 h-4" />
            <span>{item.name}</span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="ps-6">
          <div className="flex flex-col gap-1">
            {item.items.map((child) => renderItem(child))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Button
      key={item.name}
      variant="link"
      size="sm"
      className="w-full justify-start gap-2 text-foreground"
    >
      <File className="w-4 h-4" />
      <span>{item.name}</span>
    </Button>
  );
}

export default function CollapsibleFileTreeExample() {
  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <Tabs defaultValue="explorer">
          <TabsList className="w-full">
            <TabsTrigger value="explorer">Explorer</TabsTrigger>
            <TabsTrigger value="outline">Outline</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </Card>
  );
}

