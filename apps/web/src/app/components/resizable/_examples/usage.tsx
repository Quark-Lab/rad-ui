"use client";

export const code = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Example() {
  return (
    <ResizablePanelGroup orientation="horizontal">
      <ResizablePanel defaultSize="50%">یک</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="50%">دو</ResizablePanel>
    </ResizablePanelGroup>
  );
}
`;

export default function UsageExample() {
  return null;
}

