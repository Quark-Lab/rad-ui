"use client";

export const code = `// ساختار پروژه پیشنهادی
// app
// └── payments
//     ├── columns.tsx
//     ├── data-table.tsx
//     └── page.tsx

// columns.tsx — تعریف ستون‌ها (کامپوننت کلاینت)
"use client";

import { ColumnDef } from "@tanstack/react-table";

export interface Payment {
  id: string;
  amount: number;
  status: "موفق" | "در انتظار" | "ناموفق" | "در حال پردازش";
  email: string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "وضعیت",
  },
  {
    accessorKey: "email",
    header: "ایمیل",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-end">مبلغ</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("fa-IR").format(amount);
      return <div className="text-end font-medium">{formatted} تومان</div>;
    },
  },
];

// data-table.tsx — کامپوننت DataTable (کامپوننت کلاینت)
"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                نتیجه‌ای یافت نشد.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

// page.tsx — صفحه سرور
import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // دریافت داده از API
  return [
    {
      id: "INV-001",
      amount: 316000,
      status: "موفق",
      email: "ken99@example.com",
    },
    // ...
  ];
}

export default async function PaymentsPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}`;

export default function UsageExample() {
  return null;
}
