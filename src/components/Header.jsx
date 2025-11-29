import React from "react";
/*
  Import mọi thứ từ module avatar để hỗ trợ cả named và default exports.
  Nếu module không xuất component phù hợp, dùng fallback đơn giản (div).
*/
import * as AvatarModule from "../components/ui/avatar";

const AvatarComp = AvatarModule.default ?? AvatarModule.Avatar ?? AvatarModule;

/* Component render Avatar an toàn */
function RenderAvatar() {
  // Nếu AvatarComp là function/component, thử render nó.
  if (typeof AvatarComp === "function") {
    // Một số scaffold export thêm phụ phần như Avatar.Fallback hoặc AvatarImage
    const Fallback = AvatarComp.Fallback ?? AvatarModule.AvatarFallback ?? null;

    return (
      <React.Fragment>
        {/* Nếu AvatarComp nhận children */}
        <AvatarComp>
          {Fallback ? <Fallback>NV</Fallback> : <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">NV</div>}
        </AvatarComp>
      </React.Fragment>
    );
  }

  // Fallback nếu không có component hợp lệ
  return <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">NV</div>;
}

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4">
      <div className="text-sm text-gray-500"> </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">NV</div>
        <RenderAvatar />
      </div>
    </header>
  );
}