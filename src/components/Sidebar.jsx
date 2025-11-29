import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const items = [
    { to: "/", label: "Dashboard" },
    { to: "/products", label: "Products" },
    { to: "/orders", label: "Orders" },
    { to: "/customers", label: "Customers" },
  ];
  return (
    <aside className="w-64 bg-white border-r p-4 rounded-l-lg">
      <nav className="space-y-2">
        <div className="text-xs text-gray-400 uppercase mb-2">Navigation</div>
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm ${isActive ? "bg-indigo-100 text-indigo-700" : "text-gray-700 hover:bg-gray-50"}`
            }
          >
            {it.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}