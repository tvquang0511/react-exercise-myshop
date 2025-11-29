import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await login(form);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Login</h3>
        <Link to="/register" className="text-indigo-500 text-sm">Sign Up</Link>
      </div>

      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input required value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} className="mt-1 block w-full rounded-lg border px-3 py-2" placeholder="un01" />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="mt-1 block w-full rounded-lg border px-3 py-2" />
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}

        <button className="w-full bg-indigo-500 text-white py-2 rounded-lg mt-2">Login</button>
      </form>
    </div>
  );
}