"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from "@/registry/web/ui";
import { Calendar, MapPin } from "lucide-react";

export const code = `import { Calendar, MapPin } from "lucide-react";
import { Badge,Button,Card,CardHeader,CardTitle,CardDescription,CardContent,CardFooter } from "@/components/ui";

<Card className="max-w-sm overflow-hidden">
  <img
    src="/event-image.jpg"
    alt="تصویر رویداد"
    className="aspect-video w-full object-cover"
  />
  <CardHeader>
    <div className="flex items-center gap-2 mb-2">
      <Badge variant="secondary">ویژه</Badge>
    </div>
    <CardTitle>همایش طراحی سیستم</CardTitle>
    <CardDescription>
      یک گفتگوی عملی درباره API کامپوننت‌ها، دسترسی‌پذیری و ارسال سریع‌تر.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span>۲۵ اسفند ۱۴۰۴</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        <span>تهران، ایران</span>
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">مشاهده رویداد</Button>
  </CardFooter>
</Card>`;

export default function WithImageExample() {
  return (
    <Card className="max-w-sm overflow-hidden">
      <div className="aspect-video bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-sm">تصویر رویداد</span>
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">ویژه</Badge>
        </div>
        <CardTitle>همایش طراحی سیستم</CardTitle>
        <CardDescription>
          یک گفتگوی عملی درباره API کامپوننت‌ها، دسترسی‌پذیری و ارسال سریع‌تر.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>۲۵ اسفند ۱۴۰۴</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>تهران، ایران</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">مشاهده رویداد</Button>
      </CardFooter>
    </Card>
  );
}
