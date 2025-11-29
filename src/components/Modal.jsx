import React, { useEffect, useRef } from "react";

/**
 * Generic Modal
 * - open: boolean
 * - onClose: () => void
 * - children: content
 * - size: "sm" | "md" | "lg"
 */
export default function Modal({ open, onClose, children, size = "sm" }) {
  const ref = useRef();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // click outside to close
  function onBackdropClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose?.();
    }
  }

  if (!open) return null;

  const sizeClass =
    size === "sm" ? "max-w-md" : size === "md" ? "max-w-lg" : "max-w-3xl";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
      onMouseDown={onBackdropClick}
    >
      <div
        ref={ref}
        className={`bg-white ${sizeClass} w-full rounded-xl shadow-lg p-5`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}