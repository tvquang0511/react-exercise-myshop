import React, { useState } from "react";
import data from "../data";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

export default function Products() {
  const { products } = data;
  const PAGE_SIZE = 6;
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = products.slice(start, start + PAGE_SIZE);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <aside className="col-span-1">
        <div className="bg-white p-4 rounded shadow-sm">
          <h4 className="font-semibold mb-2">NAVIGATION</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="px-2 py-1 rounded bg-sky-50">Dashboard</li>
            <li className="px-2 py-1 rounded hover:bg-gray-100">Products</li>
            <li className="px-2 py-1 rounded hover:bg-gray-100">Orders</li>
            <li className="px-2 py-1 rounded hover:bg-gray-100">Customers</li>
          </ul>
        </div>
      </aside>

      <section className="col-span-3">
        <div className="bg-white p-6 rounded shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">Sản phẩm nổi bật</h2>
              <p className="text-sm text-gray-500">Đang hiển thị trang {page}/{totalPages} – mỗi trang {PAGE_SIZE} sản phẩm, dữ liệu từ data.js.</p>
            </div>
            <div className="text-sm text-gray-400">Built with React · Vite · Tailwind · shadcn</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pageItems.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </section>
    </div>
  );
}