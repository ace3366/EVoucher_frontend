import { NavLink } from "react-router-dom";
import { List, TicketPercent, ReceiptText } from "lucide-react";
import goldenRose from "@/assets/Rose.ico";
export default function SideBar({ className = "" }) {
  return (
    <aside
      className={`${className} my-32 mx-3 pb-6 flex flex-col rounded-md shadow group fixed z-10 
         bg-gradient-to-b from-zinc-900 to-amber-600 text-neutral-200
          w-20 hover:w-64 transition-all duration-300 ease-in-out  md:block hidden `}
    >
      {/* Logo  */}
      <div className="p-5">
        <div className="flex justify-center">
          <img src={goldenRose} className="size-10 inline-block" alt="" />
        </div>
      </div>
      {/* Main menu */}
      <div className="flex flex-col gap-2 items-start mx-1">
        <NavLink
          to="/voucher-set"
          className={({ isActive }) =>
            `p-5 flex items-center w-full transition ease-in-out duration-300 rounded-full ${
              isActive
                ? "bg-neutral-800 text-primary font-bold rounded-full hover:bg-neutral-800 hover:text-amber-400"
                : " hover:bg-neutral-200  hover:text-neutral-900"
            }`
          }
        >
          <TicketPercent className="size-8 inline-block duration-150" />
          <span
            className="absolute opacity-0 group-hover:opacity-100 text-xl left-20 inline-block 
          transition-opacity group-hover:duration-150 group-hover:delay-150 ease-in-out"
          >
            Voucher set
          </span>
        </NavLink>
        <NavLink
          to="/vouchers"
          className={({ isActive }) =>
            `p-5 flex items-center w-full transition ease-in-out duration-300 rounded-full ${
              isActive
                ? "bg-neutral-800 text-primary font-bold rounded-full hover:bg-neutral-800 hover:text-amber-400"
                : " hover:bg-neutral-200  hover:text-neutral-900"
            }`
          }
        >
          <List className="size-8 inline-block duration-75" />
          <span
            className="absolute opacity-0 group-hover:opacity-100 text-xl left-20 inline-block 
          transition-opacity group-hover:duration-150 group-hover:delay-150 ease-in-out"
          >
            Voucher list
          </span>
        </NavLink>
        <NavLink
          to="/voucher-set-rule"
          className={({ isActive }) =>
            `p-5 flex items-center w-full transition ease-in-out duration-300 rounded-full ${
              isActive
                ? "bg-neutral-800 text-primary font-bold rounded-full hover:bg-neutral-800 hover:text-amber-400"
                : " hover:bg-neutral-200  hover:text-neutral-900"
            }`
          }
        >
          <ReceiptText className="size-8 inline-block" />
          <span
            className="absolute opacity-0 group-hover:opacity-100 text-xl left-20 inline-block 
          transition-opacity group-hover:duration-150 group-hover:delay-150 ease-in-out"
          >
            Voucher set rules
          </span>
        </NavLink>
      </div>
    </aside>
  );
}
