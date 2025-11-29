import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button, GhostButton } from "./ui/button";
import { Avatar } from "./ui/avatar";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-semibold text-sky-600">
            MyShop
          </Link>
          <Link to="/products" className="text-sm text-gray-600">
            Product showcase
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-700 hidden sm:inline">NV {user.name}</span>
              <Link to="/profile" className="px-3 py-1 rounded bg-sky-50 text-sky-600 text-sm flex items-center gap-2">
                <Avatar name={user.name} />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <button onClick={logout} className="px-3 py-1 rounded bg-red-50 text-red-600 text-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/register">
                <GhostButton>Register</GhostButton>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}