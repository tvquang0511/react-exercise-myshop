import React, { createContext, useContext, useState, useEffect } from "react";
import data from "../data";

const AuthContext = createContext();

const USERS_KEY = "MYSHOP_USERS";
const SESSION_KEY = "MYSHOP_SESSION";

function ensureSeedUsers() {
  const saved = localStorage.getItem(USERS_KEY);
  if (!saved) {
    const seed = data.users || [];
    localStorage.setItem(USERS_KEY, JSON.stringify(seed));
  }
}

export function AuthProvider({ children }) {
  ensureSeedUsers();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const s = localStorage.getItem(SESSION_KEY);
    if (s) setUser(JSON.parse(s));
  }, []);

  function register(newUser) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    if (users.find((u) => u.username === newUser.username)) {
      throw new Error("Username already exists");
    }
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
    setUser(newUser);
  }

  function login({ username, password }) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const found = users.find((u) => u.username === username && u.password === password);
    if (!found) throw new Error("Invalid credentials");
    localStorage.setItem(SESSION_KEY, JSON.stringify(found));
    setUser(found);
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
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