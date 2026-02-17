"use client";

import { Textarea, Label, Button } from "@/registry/web/ui";
import { Send } from "lucide-react";

export const code = `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function WithButtonExample() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="message-send">پیام شما</Label>
        <Textarea
          id="message-send"
          placeholder="پیام خود را بنویسید..."
        />
      </div>
      <div className="flex justify-end">
        <Button>
          <Send className="ms-2 h-4 w-4" />
          ارسال
        </Button>
      </div>
    </div>
  );
}
`;

export default function WithButtonExample() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="message-send">پیام شما</Label>
        <Textarea
          id="message-send"
          placeholder="پیام خود را بنویسید..."
        />
      </div>
      <div className="flex justify-end">
        <Button>
          <Send className="ms-2 h-4 w-4" />
          ارسال
        </Button>
      </div>
    </div>
  );
}
