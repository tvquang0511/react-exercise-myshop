import React from "react";
import { cn } from "../../lib/utils";

export function Avatar({ name, src, className = "" }) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "U";
  return (
    <div className={cn("inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-100 text-sky-700 text-sm", className)}>
      {src ? <img src={src} alt={name} className="w-full h-full object-cover rounded-full" /> : <span>{initials}</span>}
    </div>
  );
}

export default Avatar;