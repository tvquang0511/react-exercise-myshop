import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }
    try {
      await register({ username: form.username, email: form.email, password: form.password });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Sign Up</h3>
      <p className="text-sm text-gray-500 mb-4">Create an account to access all features.</p>

      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input required value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} className="mt-1 block w-full rounded-lg border px-3 py-2" placeholder="Enter your username" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 block w-full rounded-lg border px-3 py-2" placeholder="m@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="mt-1 block w-full rounded-lg border px-3 py-2" placeholder="Enter your password" />
        </div>
        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input required type="password" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} className="mt-1 block w-full rounded-lg border px-3 py-2" placeholder="Confirm your password" />
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}

        <button className="w-full bg-indigo-500 text-white py-2 rounded-lg mt-2">Register</button>
      </form>
    </div>
  );
}