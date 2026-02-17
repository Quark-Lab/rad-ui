"use client";

import { useState } from "react";
import { Textarea, Label, Button } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function CommentFormExample() {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const minLength = 10;

  const handleSubmit = () => {
    if (comment.length < minLength) {
      setError(\`لطفا حداقل \${minLength} کاراکتر وارد کنید\`);
      return;
    }
    alert("نظر شما ثبت شد!");
    setComment("");
    setError("");
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="comment">نظر شما *</Label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            setError("");
          }}
          placeholder="نظر خود را بنویسید..."
          aria-invalid={!!error}
          className={error ? "border-destructive" : ""}
        />
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
        <p className="text-sm text-muted-foreground">
          {comment.length} / {minLength} حداقل
        </p>
      </div>
      <Button onClick={handleSubmit}>ارسال نظر</Button>
    </div>
  );
}
`;

export default function CommentFormExample() {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const minLength = 10;

  const handleSubmit = () => {
    if (comment.length < minLength) {
      setError(`لطفا حداقل ${minLength} کاراکتر وارد کنید`);
      return;
    }
    alert("نظر شما ثبت شد!");
    setComment("");
    setError("");
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="comment">نظر شما *</Label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            setError("");
          }}
          placeholder="نظر خود را بنویسید..."
          aria-invalid={!!error}
          className={error ? "border-destructive" : ""}
        />
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
        <p className="text-sm text-muted-foreground">
          {comment.length} / {minLength} حداقل
        </p>
      </div>
      <Button onClick={handleSubmit}>ارسال نظر</Button>
    </div>
  );
}
