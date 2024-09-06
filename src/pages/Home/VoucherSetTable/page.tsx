import { useEffect, useState } from "react";
import { VoucherSet, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<VoucherSet[]> {
  return [
    {
      name: "Nice voucher",
      code: "KFSA",
      quantity: 12,
      creation_time: "21/03/2022",
      voucher_rule: 124,
    },
  ];
}

export default function DemoPage() {
  const [data, setData] = useState<VoucherSet[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
