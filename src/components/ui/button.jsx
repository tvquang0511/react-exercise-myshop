import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50 " +
        "bg-sky-600 text-white hover:bg-sky-700 " +
        className
      }
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium transition-colors " +
        "bg-white border text-sky-600 hover:bg-sky-50 " +
        className
      }
    >
      {children}
    </button>
  );
}

export default Button;