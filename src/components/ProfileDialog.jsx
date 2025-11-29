import React from "react";

/**
 * ProfileDialog shows user info and a Logout button.
 * Props:
 * - open: boolean
 * - onClose: () => void
 * - user: { username, email, name? }
 * - onRequestLogout: () => void  (called when pressing Logout inside dialog)
 */
export default function ProfileDialog({ open, onClose, user, onRequestLogout }) {
  if (!open) return null;

  const displayName = user?.name || user?.username || "User";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Profile</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close profile"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-3 text-sm text-gray-700">
          <div>
            <div className="text-xs text-gray-500">Username:</div>
            <div className="font-medium">{user?.username}</div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Name:</div>
            <div className="font-medium">{displayName}</div>
          </div>

          <div>
            <div className="text-xs text-gray-500">Email:</div>
            <div className="font-medium">{user?.email}</div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={onRequestLogout}
            className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}