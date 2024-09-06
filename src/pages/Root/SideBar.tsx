import { NavLink } from "react-router-dom";
import { List, TicketPercent, ReceiptText } from "lucide-react";
export default function SideBar({ className = "" }) {
  return (
    <aside
      className={`${className} my-32 mx-3 flex flex-col rounded-md shadow group fixed z-10 
         bg-gradient-to-b from-zinc-900 to-amber-600 text-neutral-200
          w-20 hover:w-64 transition-all duration-300 ease-in-out  md:block hidden `}
    >
      {/* Logo  */}
      <div className="p-5">
        <div className="flex justify-center">
          <img
            src="../../../public/icon/rose.ico"
            className="size-10 inline-block"
            alt=""
          />
        </div>
      </div>
      {/* Main menu */}
      <div className="flex flex-col items-start ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "p-5 flex items-center"
              : isActive
              ? "p-5 flex items-center text-teal-500 font-bold"
              : "p-5 flex items-center"
          }
        >
          <TicketPercent className="size-10 inline-block duration-150" />
          <span
            className="absolute opacity-0 group-hover:opacity-100 text-xl left-20 inline-block 
          transition group-hover:duration-150 group-hover:delay-150 ease-in-out"
          >
            Voucher set
          </span>
        </NavLink>
        <NavLink
          to="/vouchers"
          className={({ isActive, isPending }) =>
            isPending
              ? "p-5 flex items-center"
              : isActive
              ? "p-5 flex items-center text-teal-500 font-bold"
              : "p-5 flex items-center"
          }
        >
          <List className="size-10 inline-block duration-75" />
          <span
            className="absolute opacity-0 group-hover:opacity-100 text-xl left-20 inline-block 
          transition group-hover:duration-150 group-hover:delay-150 ease-in-out"
          >
            Voucher list
          </span>
        </NavLink>
        <NavLink
          to="/voucher-set-rule"
          className={({ isActive, isPending }) =>
            isPending
              ? "p-5 flex items-center"
              : isActive
              ? "p-5 flex items-center text-teal-500 font-bold"
              : "p-5 flex items-center"
          }
        >
          <ReceiptText className="size-10 inline-block" />
          <span
            className="absolute opacity-0 group-hover:opacity-100 text-xl left-20 inline-block 
          transition group-hover:duration-150 group-hover:delay-150 ease-in-out"
          >
            Voucher set rules
          </span>
        </NavLink>
      </div>
    </aside>
  );
}
