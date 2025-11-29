import React from "react";
import { GhostButton } from "./ui/button";

export default function Pagination({ page, totalPages, onChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <GhostButton onClick={() => onChange(page - 1)} disabled={page === 1}>
        ‹
      </GhostButton>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-3 py-1 rounded border ${p === page ? "bg-sky-600 text-white" : "bg-white text-sm"}`}
        >
          {p}
        </button>
      ))}
      <GhostButton onClick={() => onChange(page + 1)} disabled={page === totalPages}>
        ›
      </GhostButton>
    </div>
  );
}