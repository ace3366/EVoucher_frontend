"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type VoucherSet = {
  code: string;
  expirationDate: string;
  faceValue: number;
  validDate: string;
  voucherSetId: number;
};

export const columns: ColumnDef<VoucherSet>[] = [
  {
    accessorKey: "index",
    header: () => <div className="text-left">Index</div>,
    cell: (info) => <div className="text-left">{info.row.index + 1}</div>,
  },
  {
    accessorKey: "code",
    header: () => <div className="text-left">Code</div>,
    cell: ({ row }) => <div className="text-left">{row.getValue("code")}</div>,
  },
  {
    accessorKey: "expirationDate",
    header: () => <div className="text-left">Expiration date</div>,
    cell: ({ row }) => {
      const time: string = row.getValue("expirationDate");
      const convertedTime = new Date(time);
      const formattedTime = convertedTime.toLocaleString();
      return <div className="text-left">{formattedTime}</div>;
    },
  },
  {
    accessorKey: "faceValue",
    header: () => <div className="text-left">Face value</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("faceValue")}</div>
    ),
  },
  {
    accessorKey: "validDate",
    header: () => <div className="text-left">Valid date</div>,
    cell: ({ row }) => {
      const time: string = row.getValue("validDate");
      const convertedTime = new Date(time);
      const formattedTime = convertedTime.toLocaleString();
      return <div className="text-left">{formattedTime}</div>;
    },
  },
  {
    accessorKey: "voucherSetId",
    header: () => <div className="text-left">Voucher set ID</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("voucherSetId")}</div>
    ),
  },
];
