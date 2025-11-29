import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border">
      <div className="text-sm font-medium mb-2">{product.title}</div>
      <div className="bg-gray-100 rounded-md h-36 flex items-center justify-center mb-3">
        {product.image ? (
          <img src={product.image} alt={product.title} className="object-contain h-32" />
        ) : (
          <div className="text-gray-400">300 × 150</div>
        )}
      </div>
      <div className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">{product.price} ₫</div>
          <div className="text-xs text-gray-500">★ {product.rating?.rate ?? "—"} • {product.rating?.count ?? 0} đánh giá</div>
        </div>
        <button className="bg-indigo-500 text-white px-3 py-1 rounded-md text-sm">Xem chi tiết</button>
      </div>
    </div>
  );
}