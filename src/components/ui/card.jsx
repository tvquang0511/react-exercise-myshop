import React from "react";
import { cn } from "../../lib/utils";

export function Card({ children, className = "" }) {
  return <div className={cn("bg-white border rounded-lg shadow-sm p-4", className)}>{children}</div>;
}

export function CardHeader({ children, className = "" }) {
  return <div className={cn("mb-3", className)}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return <div className={cn("mt-3", className)}>{children}</div>;
}