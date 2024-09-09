"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type VoucherSet = {
  name: string;
  code: string;
  quantity: number;
  creationTime: string;
  voucherSetRuleId: number;
};

export const columns: ColumnDef<VoucherSet>[] = [
  {
    accessorKey: "index",
    header: () => <div className="text-left">Index</div>,
    cell: (info) => <div className="text-left">{info.row.index + 1}</div>,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left">Name</div>,
    cell: ({ row }) => <div className="text-left">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "code",
    header: () => <div className="text-left">Code</div>,
    cell: ({ row }) => <div className="text-left">{row.getValue("code")}</div>,
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-left">Quantity</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("quantity")}</div>
    ),
  },
  {
    accessorKey: "creationTime",
    header: () => <div className="text-left">Creation time</div>,
    cell: ({ row }) => {
      const time: string = row.getValue("creationTime");
      const convertedTime = new Date(time);
      const formattedTime = convertedTime.toLocaleString();
      return <div className="text-left">{formattedTime}</div>;
    },
  },
  {
    accessorKey: "voucherSetRuleId",
    header: () => <div className="text-left">Voucher rule</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("voucherSetRuleId")}</div>
    ),
  },
];
