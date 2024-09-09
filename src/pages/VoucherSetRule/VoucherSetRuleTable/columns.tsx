"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type VoucherSet = {
  codeLength: number;
  characterSet: string;
  codePrefix: string;
  codePostfix: string;
};

export const columns: ColumnDef<VoucherSet>[] = [
  {
    accessorKey: "index",
    header: () => <div className="text-left">Index</div>,
    cell: (info) => <div className="text-left">{info.row.index + 1}</div>,
  },
  {
    accessorKey: "codeLength",
    header: () => <div className="text-left">Code length</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("codeLength")}</div>
    ),
  },
  {
    accessorKey: "characterSet",
    header: () => <div className="text-left">Character set</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("characterSet")}</div>
    ),
  },
  {
    accessorKey: "codePrefix",
    header: () => <div className="text-left">Code prefix</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("codePrefix")}</div>
    ),
  },
  {
    accessorKey: "codePostfix",
    header: () => <div className="text-left">Code postfix</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("codePostfix")}</div>
    ),
  },
];
