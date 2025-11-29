import React from "react";
import { cn } from "../../lib/utils";

export function Badge({ children, variant = "default", className = "" }) {
  const base = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ";
  const v =
    variant === "hot"
      ? "bg-red-100 text-red-700"
      : variant === "accent"
      ? "bg-sky-100 text-sky-700"
      : "bg-gray-100 text-gray-700";
  return <span className={cn(base + v, className)}>{children}</span>;
}

export default Badge;