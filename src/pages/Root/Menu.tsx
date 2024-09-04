import { Bell, CircleUser } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Menu({ className = "" }) {
  return (
    <header className={`${className} flex justify-between p-4`}>
      <div></div>
      <div className="font-handjet text-5xl">
        <img
          src="../../../public/icon/ribbon.ico"
          className="size-10 inline pr-2"
          alt=""
        />
        E-Voucher
      </div>
      <div className="flex gap-2">
        <ModeToggle />
        <div className="flex flex-col justify-center">
          <Bell className="inline-block" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <CircleUser className="inline-block" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-500 hover:text-red-600">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
