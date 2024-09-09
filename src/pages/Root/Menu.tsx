import {
  Bell,
  CircleUser,
  RectangleEllipsis,
  ChevronRight,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import goldenRibbon from "@/assets/ribbon.ico";
import { titleConvert } from "@/utils/stringUtils";
import { useLocation } from "react-router-dom";

export default function Menu({ className = "" }) {
  const location = useLocation();
  const path = location.pathname;
  const title: string = titleConvert(path);
  return (
    <header className={`${className} flex justify-between p-4`}>
      {/* Left side */}
      <div className="font-handjet text-5xl">
        <img src={goldenRibbon} className="size-10 inline pr-2" alt="" />
        <span className="font-medium">E-Voucher</span>
        <ChevronRight className="inline size-12" />
        <span className="text-4xl">{title}</span>
      </div>

      {/* Right side  */}
      <div className="flex gap-6 pr-10">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle light/dark mode</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="md:hidden flex flex-col justify-center">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                {/* Content */}
                <RectangleEllipsis className="inline-block" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Voucher table</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              {/* Content */}
              <div className="flex flex-col justify-center">
                <Bell className="inline-block" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              {/* Content */}
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
                    <LogOut className="pr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TooltipTrigger>
            <TooltipContent>
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
}
