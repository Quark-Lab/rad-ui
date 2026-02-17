"use client";

import { Button } from "@/registry/web/ui";
import { Download, Heart, Send } from "lucide-react";

export const code = `import { Button } from "@/components/ui/button";
import { Download, Heart, Send } from "lucide-react";

export default function WithIconsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Download className="ms-2 h-4 w-4" />
        دانلود
      </Button>
      <Button variant="outline">
        ارسال
        <Send className="me-2 h-4 w-4" />
      </Button>
      <Button variant="ghost">
        <Heart className="ms-2 h-4 w-4" />
        علاقه‌مندی
      </Button>
    </div>
  );
}
`;

export default function WithIconsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Download className="ms-2 h-4 w-4" />
        دانلود
      </Button>
      <Button variant="outline">
        ارسال
        <Send className="me-2 h-4 w-4" />
      </Button>
      <Button variant="ghost">
        <Heart className="ms-2 h-4 w-4" />
        علاقه‌مندی
      </Button>
    </div>
  );
}
