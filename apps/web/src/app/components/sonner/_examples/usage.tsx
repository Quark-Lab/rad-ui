"use client";

export const code = `import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
`;

export default function UsageExample() {
  return null;
}

