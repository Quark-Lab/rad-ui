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
} from "@/registry/web/ui";

interface Payment {
  id: string;
  amount: number;
  status: "موفق" | "در انتظار" | "ناموفق" | "در حال پردازش";
  email: string;
}

const data: Payment[] = [
  {
    id: "INV-001",
    amount: 316000,
    status: "موفق",
    email: "ken99@example.com",
  },
  {
    id: "INV-002",
    amount: 242000,
    status: "موفق",
    email: "abe45@example.com",
  },
  {
    id: "INV-003",
    amount: 837000,
    status: "در حال پردازش",
    email: "monserrat44@example.com",
  },
  {
    id: "INV-004",
    amount: 874000,
    status: "موفق",
    email: "silas22@example.com",
  },
  {
    id: "INV-005",
    amount: 721000,
    status: "ناموفق",
    email: "carmella@example.com",
  },
];

const columns: ColumnDef<Payment>[] = [
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

export const code = `"use client";

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

interface Payment {
  id: string;
  amount: number;
  status: "موفق" | "در انتظار" | "ناموفق" | "در حال پردازش";
  email: string;
}

const columns: ColumnDef<Payment>[] = [
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

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function DataTable<TData, TValue>({
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
              <TableRow key={row.id}>
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
}`;

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function DataTable<TData, TValue>({
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
              <TableRow key={row.id}>
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

export default function BasicExample() {
  return <DataTable columns={columns} data={data} />;
}
