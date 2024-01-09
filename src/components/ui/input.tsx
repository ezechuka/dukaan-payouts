import * as React from "react"

import { cn } from "@/lib/utils"
import { SearchIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex w-full h-10 bg-[#F2F2F2] items-center rounded-md border border-input pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className,
        )}
      >
        <SearchIcon className="text-gray-500 h-[16px] w-[16px]" />
        <input
          {...props}
          type={type}
          ref={ref}
          className="w-full bg-[#F2F2F2] p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  }
)
Input.displayName = "Input"

export { Input }
