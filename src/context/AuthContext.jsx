import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("myshop_user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("myshop_user", JSON.stringify(user));
    else localStorage.removeItem("myshop_user");
  }, [user]);

  function register({ username, email, password }) {
    const users = JSON.parse(localStorage.getItem("myshop_users") || "[]");
    if (users.find((u) => u.username === username || u.email === email)) {
      throw new Error("Username or email already exists");
    }
    const newUser = { id: Date.now(), username, email, password };
    users.push(newUser);
    localStorage.setItem("myshop_users", JSON.stringify(users));
    setUser({ id: newUser.id, username: newUser.username, email: newUser.email });
    return newUser;
  }

  function login({ username, password }) {
    const users = JSON.parse(localStorage.getItem("myshop_users") || "[]");
    const u = users.find((x) => x.username === username && x.password === password);
    if (!u) {
      throw new Error("Invalid credentials");
    }
    setUser({ id: u.id, username: u.username, email: u.email });
    return u;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}