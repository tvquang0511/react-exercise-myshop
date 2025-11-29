import React from "react";
/*
  Sử dụng Avatar scaffold của shadcn.
  Nếu avatar export là default hoặc named, đổi import cho phù hợp.
  Mình giả định shadcn đã tạo file ở src/components/ui/avatar.js(x)
*/
import Avatar from "../components/ui/avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4">
      <div className="text-sm text-gray-500"> </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">NV</div>
        {/* Avatar từ shadcn */}
        <Avatar name="Nguyễn Văn A" />
      </div>
    </header>
  );
}