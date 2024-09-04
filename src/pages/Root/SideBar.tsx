import { List, TicketPercent, ReceiptText } from "lucide-react";
export default function SideBar({ className = "" }) {
  return (
    <aside
      className={`${className} my-10 mx-3 flex flex-col rounded-md  bg-zinc-900
         group fixed w-24 hover:w-64 transition-all duration-300 ease-in-out  `}
    >
      {/* Logo  */}
      <div className="p-5">
        <div className="flex justify-center">
          <img
            src="../../../public/icon/rose.ico"
            className="size-12 inline-block"
            alt=""
          />
        </div>
      </div>
      {/* Main menu */}
      <div className="flex flex-col items-start">
        <div className="p-5 flex items-center">
          <TicketPercent className="size-10 inline-block" />
          <span
            className="absolute opacity-0 group-hover:opacity-100 text-xl left-20 inline-block 
          transition duration-150 group-hover:duration-150 group-hover:delay-150 ease-in-out"
          >
            Voucher set
          </span>
        </div>
        <div className="p-5 flex items-center">
          <List className="size-10" />
          <span
            className="absolute opacity-0 group-hover:opacity-100 text-xl left-20 inline-block 
          transition duration-150 group-hover:duration-150 group-hover:delay-150 ease-in-out"
          >
            Voucher list
          </span>
        </div>
        <div className="p-5 flex items-center">
          <ReceiptText className="size-10" />
          <span
            className="absolute opacity-0 group-hover:opacity-100 text-xl left-20 inline-block 
          transition duration-150 group-hover:duration-150 group-hover:delay-150 ease-in-out"
          >
            Voucher set rules
          </span>
        </div>
      </div>
    </aside>
  );
}
