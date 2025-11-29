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
  username: z.string().min(3, "Username phải có ít nhất 3 ký tự"),
  name: z.string().min(2, "Name phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(4, "Password phải có ít nhất 4 ký tự")
});

export default function Register() {
  const { register: authRegister } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  async function onSubmit(values) {
    try {
      authRegister(values);
      reset();
      navigate("/profile");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <Label>Username</Label>
          <Input {...register("username")} />
          {errors.username && <div className="text-xs text-red-600">{errors.username.message}</div>}
        </div>

        <div>
          <Label>Name</Label>
          <Input {...register("name")} />
          {errors.name && <div className="text-xs text-red-600">{errors.name.message}</div>}
        </div>

        <div>
          <Label>Email</Label>
          <Input {...register("email")} />
          {errors.email && <div className="text-xs text-red-600">{errors.email.message}</div>}
        </div>

        <div>
          <Label>Password</Label>
          <Input type="password" {...register("password")} />
          {errors.password && <div className="text-xs text-red-600">{errors.password.message}</div>}
        </div>

        <div className="flex justify-end">
          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  );
}