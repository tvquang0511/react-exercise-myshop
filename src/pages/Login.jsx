import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

const schema = z.object({
  username: z.string().min(1, "Username required"),
  password: z.string().min(1, "Password required")
});

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  function onSubmit(values) {
    try {
      login(values);
      navigate("/profile");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <Label>Username</Label>
          <Input {...register("username")} />
          {errors.username && <div className="text-xs text-red-600">{errors.username.message}</div>}
        </div>

        <div>
          <Label>Password</Label>
          <Input type="password" {...register("password")} />
          {errors.password && <div className="text-xs text-red-600">{errors.password.message}</div>}
        </div>

        <div className="flex justify-between items-center">
          <Button type="submit">Login</Button>
          <a href="/register" className="text-sm text-sky-600">Create account</a>
        </div>
      </form>
    </div>
  );
}