import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Thông tin cá nhân</h3>
      <div className="text-sm text-gray-700"><strong>{user?.username}</strong></div>
      <div className="text-sm text-gray-500">{user?.email}</div>
      <div className="mt-4">
        <h4 className="text-sm font-medium">Profile</h4>
        <p className="text-xs text-gray-500">Settings</p>
      </div>
    </div>
  );
}