import React from "react";
/*
  Dùng Card / Button nếu shadcn scaffold có file tương ứng.
  Nếu shadcn cung cấp named export (e.g. export function Card), bạn có thể đổi import:
    import { Card } from "../components/ui/card";
  Ở đây để an toàn (không phụ thuộc chi tiết export), code dùng thẻ div với class giống Card.
*/
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-start gap-4">
        <div className="w-40 h-24 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-sm">
          300 x 150
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-gray-800 truncate">{product.title}</h3>
            {product.hot && (
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full ml-2">Hot</span>
            )}
          </div>

          <p className="text-sm text-gray-500 mt-2">{product.description}</p>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold">{product.price} đ</div>
              <div className="text-xs text-gray-500 mt-1">★ {product.rating} · {product.reviews} đánh giá</div>
              <div className="text-xs text-gray-400 mt-1">Rating count: {product.reviews}</div>
            </div>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  );
}