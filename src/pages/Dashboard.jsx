import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/ui/pagination";
import products from "../data.js"; // <-- sửa đây: data.js nằm trong src

export default function Dashboard() {
  const perPage = 2;
  const [page, setPage] = useState(2);
  const totalPages = useMemo(() => Math.max(1, Math.ceil((Array.isArray(products) ? products.length : 0) / perPage)), [perPage]);

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
          <p className="text-sm text-gray-500">Đang hiển thị trang {page}/{totalPages} — mỗi trang {perPage} sản phẩm, dữ liệu từ data.js.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-6">
        <Pagination totalPages={totalPages} current={page} onChange={(p) => setPage(p)} />
      </div>
    </section>
  );
}