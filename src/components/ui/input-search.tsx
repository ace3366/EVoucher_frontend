import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputSearch = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative w-full mr-10">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background pl-3 pr-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <Search className="size-7 absolute right-1 top-1 cursor-pointer hover:text-amber-400"></Search>
      </div>
    );
  }
);
InputSearch.displayName = "InputSearch";

export { InputSearch };
