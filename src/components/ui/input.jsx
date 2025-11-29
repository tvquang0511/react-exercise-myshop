import * as React from "react";
import { cn } from "../../lib/utils";

export const Input = React.forwardRef(({ className = "", type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      {...props}
      className={cn(
        "w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 bg-white",
        className
      )}
    />
  );
});
Input.displayName = "Input";

export default Input;