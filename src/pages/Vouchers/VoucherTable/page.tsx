import { useEffect, useState } from "react";
import { VoucherSet, columns } from "./columns";
import { DataTable } from "./data-table";

export default function DemoPage() {
  const [data, setData] = useState<VoucherSet[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/Vouchers?page=1&pageSize=10`
      );
      const data = await response.json();
      const result = data.result;
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
