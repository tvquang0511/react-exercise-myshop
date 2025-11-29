import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ProfileDialog from "./ProfileDialog";
import LogoutConfirm from "./LogoutConfirm";

/**
 * Navbar with avatar and dropdown.
 *
 * Behavior adjustments per request:
 * - Login/Register are separate pages (unchanged).
 * - Clicking avatar toggles dropdown.
 * - Clicking "Profile" in dropdown opens ProfileDialog (modal).
 * - Clicking "Log out" opens LogoutConfirm (modal). Confirming invokes logout().
 */
export default function Navbar() {
  const { user, logout } = useAuth();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpenDropdown(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const initials = user
    ? (user.username || "NV")
        .split(" ")
        .map((s) => s[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "NV";

  function onRequestProfile() {
    setOpenDropdown(false);
    setShowProfileDialog(true);
  }

  function onRequestLogout() {
    setOpenDropdown(false);
    setShowLogoutConfirm(true);
  }

  function handleConfirmLogout() {
    logout();
    setShowLogoutConfirm(false);
    setShowProfileDialog(false);
  }

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-semibold text-indigo-600">MyShop</div>
            <div className="text-sm text-gray-500">Product showcase</div>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative" ref={ref}>
                <button
                  onClick={() => setOpenDropdown((s) => !s)}
                  className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white hover:shadow"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    {initials}
                  </div>
                  <div className="text-sm text-gray-700">{user.username}</div>
                </button>

                {openDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="px-4 py-3">
                      <div className="font-semibold">{user.username}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                    <div className="border-t">
                      <button
                        onClick={onRequestProfile}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          /* placeholder for settings */
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-600"
                      >
                        Settings
                      </button>
                      <button
                        onClick={onRequestLogout}
                        className="w-full text-left px-4 py-2 text-rose-600 hover:bg-gray-50"
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to="/login" className="text-sm text-indigo-600">
                  Login
                </Link>
                <Link to="/register" className="text-sm text-indigo-600">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <ProfileDialog
        open={showProfileDialog}
        onClose={() => setShowProfileDialog(false)}
        user={user}
        onRequestLogout={() => setShowLogoutConfirm(true)}
      />

      <LogoutConfirm
        open={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
}