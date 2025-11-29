import React from "react";

export default function Pagination({ page, totalPages, onPage }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => onPage(Math.max(1, page - 1))}
        className="px-3 py-1 rounded-full border"
      >
        ◀
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPage(p)}
          className={`w-9 h-9 rounded-full ${p === page ? "bg-indigo-100 text-indigo-700" : "bg-white border"}`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onPage(Math.min(totalPages, page + 1))}
        className="px-3 py-1 rounded-full border"
      >
        ▶
      </button>
    </div>
  );
}