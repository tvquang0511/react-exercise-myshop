import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/button";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Profile</h2>
        <Button onClick={logout} className="bg-red-50 text-red-600 hover:bg-red-100">Logout</Button>
      </div>
      <div className="mt-4 space-y-2">
        <div><strong>Username:</strong> {user.username}</div>
        <div><strong>Name:</strong> {user.name}</div>
        <div><strong>Email:</strong> {user.email}</div>
      </div>
    </div>
  );
}