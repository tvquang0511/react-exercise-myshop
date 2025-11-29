import React from "react";

/**
 * Logout confirmation modal
 * Props:
 * - open: boolean
 * - onClose: () => void
 * - onConfirm: () => void
 */
export default function LogoutConfirm({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-5">
        <h3 className="text-lg font-semibold">Confirm logout</h3>
        <p className="text-sm text-gray-600 mt-2">
          Are you sure you want to log out?
        </p>

        <div className="mt-5 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
            }}
            className="px-4 py-2 rounded-md bg-rose-600 text-white hover:bg-rose-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}