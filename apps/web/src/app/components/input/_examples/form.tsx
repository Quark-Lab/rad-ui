"use client";

import { Input, Label, Button } from "@/registry/web/ui";
import { Search, Mail, User, Phone, MapPin } from "lucide-react";

export const code = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search, Mail, User, Phone, MapPin } from "lucide-react";

export default function FormExample() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="form-name">نام</Label>
          <div className="relative">
            <User className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="form-name"
              className="ps-9"
              placeholder="نام کامل"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="form-email">ایمیل</Label>
          <div className="relative">
            <Mail className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="form-email"
              className="ps-9"
              type="email"
              validate
              showError
              placeholder="user@example.com"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="form-phone">شماره تماس</Label>
        <div className="relative">
          <Phone className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="form-phone"
            className="ps-9"
            type="tel"
            validate
            showError
            placeholder="0912..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="form-address">آدرس</Label>
        <div className="relative">
          <MapPin className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="form-address"
            className="ps-9"
            placeholder="آدرس پستی"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline" type="button">
          لغو
        </Button>
        <Button type="submit">ثبت اطلاعات</Button>
      </div>
    </form>
  );
}
`;

export default function FormExample() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="form-name">نام</Label>
          <div className="relative">
            <User className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="form-name"
              className="ps-9"
              placeholder="نام کامل"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="form-email">ایمیل</Label>
          <div className="relative">
            <Mail className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="form-email"
              className="ps-9"
              type="email"
              validate
              showError
              placeholder="user@example.com"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="form-phone">شماره تماس</Label>
        <div className="relative">
          <Phone className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="form-phone"
            className="ps-9"
            type="tel"
            validate
            showError
            placeholder="0912..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="form-address">آدرس</Label>
        <div className="relative">
          <MapPin className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="form-address"
            className="ps-9"
            placeholder="آدرس پستی"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline" type="button">
          لغو
        </Button>
        <Button type="submit">ثبت اطلاعات</Button>
      </div>
    </form>
  );
}
