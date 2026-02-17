"use client";

import { useState } from "react";
import { Spinner, Button } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

export default function WithButtonsExample() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      <Button disabled>
        <Spinner size="sm" className="me-2" />
        در حال بارگذاری...
      </Button>
      <Button variant="outline" onClick={handleClick} disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner size="sm" className="me-2" />
            لطفاً صبر کنید
          </>
        ) : (
          "کلیک کنید"
        )}
      </Button>
      <Button variant="destructive" disabled>
        <Spinner size="sm" className="me-2" />
        در حال حذف...
      </Button>
    </div>
  );
}
`;

export default function WithButtonsExample() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      <Button disabled>
        <Spinner size="sm" className="me-2" />
        در حال بارگذاری...
      </Button>
      <Button variant="outline" onClick={handleClick} disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner size="sm" className="me-2" />
            لطفاً صبر کنید
          </>
        ) : (
          "کلیک کنید"
        )}
      </Button>
      <Button variant="destructive" disabled>
        <Spinner size="sm" className="me-2" />
        در حال حذف...
      </Button>
    </div>
  );
}
