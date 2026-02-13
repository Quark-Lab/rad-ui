import { ComponentsSidebar } from "@/components/components-sidebar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row pt-16">
      {/* Sidebar - appears on right in RTL */}
      <ComponentsSidebar />
      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">{children}</main>
    </div>
  );
}
