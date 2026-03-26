"use client";

import * as React from "react";
import {
  Button,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/web/ui";
import { Calendar, Mail, User } from "lucide-react";

export const code = `import * as React from "react";
import {
  Button,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui";
import { Calendar, Mail, User } from "lucide-react";

export default function SidebarControlledExample() {
  const [open, setOpen] = React.useState(true);

  return (
    <SidebarProvider
      open={open}
      onOpenChange={setOpen}
      className="relative min-h-[420px] overflow-hidden rounded-lg border border-border"
    >
      <Sidebar
        side="right"
        variant="inset"
        collapsible="offcanvas"
        className="!absolute !inset-y-0 !right-0 !left-auto"
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>پیام‌ها</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Mail />
                    <span>صندوق ورودی</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Calendar />
                    <span>تقویم</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <User />
                    <span>کاربران</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <Button
          variant="outline"
          onClick={() => setOpen((prev) => !prev)}
          className="mb-4"
        >
          {open ? "بستن سایدبار" : "باز کردن سایدبار"}
        </Button>
        <div className="rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground">
          این نمونه وضعیت Sidebar را به‌صورت کنترل‌شده مدیریت می‌کند.
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
`;

export default function ControlledExample() {
  const [open, setOpen] = React.useState(true);

  return (
    <SidebarProvider
      open={open}
      onOpenChange={setOpen}
      className="relative min-h-[420px] overflow-hidden rounded-lg border border-border"
    >
      <Sidebar
        side="right"
        variant="inset"
        collapsible="offcanvas"
        className="!absolute !inset-y-0 !right-0 !left-auto"
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>پیام‌ها</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Mail />
                    <span>صندوق ورودی</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Calendar />
                    <span>تقویم</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <User />
                    <span>کاربران</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <Button
          variant="outline"
          onClick={() => setOpen((prev) => !prev)}
          className="mb-4"
        >
          {open ? "بستن سایدبار" : "باز کردن سایدبار"}
        </Button>
        <div className="rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground">
          این نمونه وضعیت Sidebar را به‌صورت کنترل‌شده مدیریت می‌کند.
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

