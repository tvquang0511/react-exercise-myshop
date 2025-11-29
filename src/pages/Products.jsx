import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import data from "../data";

export default function Products() {
  const perPage = 6;
  const [page, setPage] = useState(1);

  const products = useMemo(() => data.products || [], []);
  const totalPages = Math.max(1, Math.ceil(products.length / perPage));
  const pageItems = products.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="flex gap-6">
      <Sidebar />
      <section className="flex-1">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-1">Sản phẩm nổi bật</h2>
          <p className="text-sm text-gray-500 mb-4">
            Đang hiển thị trang {page}/{totalPages} — mỗi trang {perPage} sản phẩm, dữ liệu từ data.js
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pageItems.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <Pagination page={page} totalPages={totalPages} onPage={setPage} />
        </div>
      </section>
    </div>
  );
}