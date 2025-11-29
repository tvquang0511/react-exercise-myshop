import React from "react";
/*
  Giả định shadcn đã scaffold, nhưng Sidebar tự viết bằng tailwind.
  Không dùng hooks phức tạp ở đây.
*/
const NavItem = ({ children, active }) => (
  <div
    className={
      "flex items-center px-4 py-3 rounded-lg cursor-pointer select-none " +
      (active ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50")
    }
  >
    {children}
  </div>
);

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6 relative">
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-200 rounded flex items-center justify-center text-blue-600 font-bold">
            M
          </div>
          <div>
            <div className="text-lg font-semibold">MyShop</div>
            <div className="text-sm text-gray-400">Product showcase</div>
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        <NavItem active>Dashboard</NavItem>
        <NavItem>Products</NavItem>
        <NavItem>Orders</NavItem>
        <NavItem>Customers</NavItem>
      </nav>

      <div className="sidebar-footer">© 2025 MyShop. All rights reserved.</div>
    </aside>
  );
}