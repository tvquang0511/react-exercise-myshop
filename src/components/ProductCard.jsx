import React from "react";
import { Card, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function ProductCard({ p }) {
  return (
    <Card className="flex flex-col">
      <div className="h-36 bg-gray-100 flex items-center justify-center rounded">
        <span className="text-gray-400">300 x 150</span>
      </div>

      <div className="mt-3 flex-1">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-sm">{p.title}</h3>
          {p.rating?.rate > 4.5 && <Badge variant="hot">Hot</Badge>}
        </div>

        <p className="text-xs text-gray-500 mt-2 line-clamp-3">{p.description}</p>

        <div className="mt-3">
          <div className="text-lg font-bold">{p.price} đ</div>
          <div className="text-xs text-yellow-600">★ {p.rating?.rate} · {p.rating?.count} đánh giá</div>
        </div>
      </div>

      <CardFooter className="flex justify-end">
        <Button>Xem chi tiết</Button>
      </CardFooter>
    </Card>
  );
}