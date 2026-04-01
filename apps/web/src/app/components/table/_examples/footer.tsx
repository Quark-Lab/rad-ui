"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/web/ui";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "پرداخت شده",
    totalAmount: "۲۵۰,۰۰۰ تومان",
    paymentMethod: "کارت اعتباری",
  },
  {
    invoice: "INV002",
    paymentStatus: "در انتظار",
    totalAmount: "۱۵۰,۰۰۰ تومان",
    paymentMethod: "درگاه پرداخت",
  },
  {
    invoice: "INV003",
    paymentStatus: "پرداخت نشده",
    totalAmount: "۳۵۰,۰۰۰ تومان",
    paymentMethod: "انتقال بانکی",
  },
];

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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "پرداخت شده",
    totalAmount: "۲۵۰,۰۰۰ تومان",
    paymentMethod: "کارت اعتباری",
  },
  // ...
];

export default function FooterExample() {
  return (
    <Table>
      <TableCaption>لیست فاکتورهای اخیر شما.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">فاکتور</TableHead>
          <TableHead>وضعیت</TableHead>
          <TableHead>روش پرداخت</TableHead>
          <TableHead className="text-end">مبلغ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-end">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>مجموع</TableCell>
          <TableCell className="text-end">۷۵۰,۰۰۰ تومان</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`;

export default function FooterExample() {
  return (
    <Table>
      <TableCaption>لیست فاکتورهای اخیر شما.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">فاکتور</TableHead>
          <TableHead>وضعیت</TableHead>
          <TableHead>روش پرداخت</TableHead>
          <TableHead className="text-end">مبلغ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-end">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>مجموع</TableCell>
          <TableCell className="text-end">۷۵۰,۰۰۰ تومان</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
