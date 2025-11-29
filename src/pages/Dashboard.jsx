import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";

/*
  Nhập data: bạn nói file data tên data.js nằm trong src
*/
import products from "../data.js";

/*
  Import pagination module an toàn (hỗ trợ default hoặc named export).
  Nếu module không xuất component, dùng fallback buttons đơn giản.
*/
import * as PaginationModule from "../components/ui/pagination";
const PaginationComp = PaginationModule.default ?? PaginationModule.Pagination ?? PaginationModule;

function SafePagination({ totalPages, current, onChange }) {
  if (typeof PaginationComp === "function") {
    return <PaginationComp totalPages={totalPages} current={current} onChange={onChange} />;
  }

  // fallback: simple pagination
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-center gap-2">
      <button onClick={() => onChange(Math.max(1, current - 1))} className="px-2">‹</button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={"w-8 h-8 flex items-center justify-center rounded-full " + (p === current ? "bg-blue-100 text-blue-600" : "text-gray-600")}
        >
          {p}
        </button>
      ))}
      <button onClick={() => onChange(Math.min(totalPages, current + 1))} className="px-2">›</button>
    </div>
  );
}

export default function Dashboard() {
  const perPage = 2;
  const [page, setPage] = useState(2);
  const totalPages = useMemo(() => {
    const len = Array.isArray(products) ? products.length : 0;
    return Math.max(1, Math.ceil(len / perPage));
  }, [perPage]);

  const visible = useMemo(() => {
    if (!Array.isArray(products)) return [];
    const start = (page - 1) * perPage;
    return products.slice(start, start + perPage);
  }, [page, perPage]);

  useEffect(() => {
    document.title = `MyShop — Trang ${page}`;
  }, [page]);

  return (
    <section>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Sản phẩm nổi bật</h2>
          <p className="text-sm text-gray-500">
            Đang hiển thị trang {page}/{totalPages} — mỗi trang {perPage} sản phẩm, dữ liệu từ data.js.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-6">
        <SafePagination totalPages={totalPages} current={page} onChange={(p) => setPage(p)} />
      </div>
    </section>
  );
}