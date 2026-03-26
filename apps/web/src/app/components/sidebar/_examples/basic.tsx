"use client";

import {
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
  SidebarTrigger,
} from "@/registry/web/ui";
import { Home, Settings, User } from "lucide-react";

export const code = `import {
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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Settings, User } from "lucide-react";

export default function SidebarBasicExample() {
  return (
    <SidebarProvider className="relative min-h-[420px] overflow-hidden rounded-lg border border-border">
      <Sidebar
        side="right"
        collapsible="icon"
        className="!absolute !inset-y-0 !right-0 !left-auto"
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>ناوبری</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="خانه">
                    <Home />
                    <span>خانه</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="پروفایل">
                    <User />
                    <span>پروفایل</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="تنظیمات">
                    <Settings />
                    <span>تنظیمات</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <div className="mb-4">
          <SidebarTrigger />
        </div>
        <div className="rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground">
          محتوای اصلی اینجاست.
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
`;

export default function BasicExample() {
  return (
    <SidebarProvider className="relative min-h-[420px] overflow-hidden rounded-lg border border-border">
      <Sidebar
        side="right"
        collapsible="icon"
        className="!absolute !inset-y-0 !right-0 !left-auto"
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>ناوبری</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="خانه">
                    <Home />
                    <span>خانه</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="پروفایل">
                    <User />
                    <span>پروفایل</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="تنظیمات">
                    <Settings />
                    <span>تنظیمات</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4">
        <div className="mb-4">
          <SidebarTrigger />
        </div>
        <div className="rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground">
          محتوای اصلی اینجاست.
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

