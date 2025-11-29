import * as React from "react";
import { cn } from "../../lib/utils";

export function Label({ children, className = "", htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={cn("block text-sm font-medium text-gray-700", className)}>
      {children}
    </label>
  );
}

export default Label;