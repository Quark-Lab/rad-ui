"use client";

import { useState } from "react";
import { Textarea, Label } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function CharacterCountExample() {
  const [message, setMessage] = useState("");
  const maxLength = 200;

  return (
    <div className="space-y-2">
      <Label htmlFor="char-count">توضیحات کوتاه</Label>
      <Textarea
        id="char-count"
        placeholder="حداکثر 200 کاراکتر..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={maxLength}
      />
      <p className="text-sm text-muted-foreground text-left" dir="ltr">
        {message.length} / {maxLength}
      </p>
    </div>
  );
}
`;

export default function CharacterCountExample() {
  const [message, setMessage] = useState("");
  const maxLength = 200;

  return (
    <div className="space-y-2">
      <Label htmlFor="char-count">توضیحات کوتاه</Label>
      <Textarea
        id="char-count"
        placeholder="حداکثر 200 کاراکتر..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={maxLength}
      />
      <p className="text-sm text-muted-foreground text-left" dir="ltr">
        {message.length} / {maxLength}
      </p>
    </div>
  );
}
