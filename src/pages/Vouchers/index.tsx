import DemoPage from "./VoucherTable/page";
import { InputSearch } from "@/components/ui/input-search";
import { Button } from "@/components/ui/button";

export default function Vouchers() {
  return (
    <div className="w-full">
      <div className="flex justify-between mx-12">
        <InputSearch></InputSearch>
        <div>
          <Button>Create</Button>
        </div>
      </div>
      <DemoPage></DemoPage>
    </div>
  );
}
