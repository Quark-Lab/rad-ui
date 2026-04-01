"use client";

export const code = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableExample() {
  return (
    <Table>
      <TableCaption>توضیحات جدول</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>عنوان</TableHead>
          <TableHead>وضعیت</TableHead>
          <TableHead className="text-end">مبلغ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">آیتم ۱</TableCell>
          <TableCell>فعال</TableCell>
          <TableCell className="text-end">۱۰۰,۰۰۰ تومان</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>مجموع</TableCell>
          <TableCell className="text-end">۱۰۰,۰۰۰ تومان</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`;

export default function UsageExample() {
  return null;
}
