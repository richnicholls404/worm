import { useState, useEffect } from "react";
import axios from "axios";
import { UserPayload } from "../utils/server/auth";

const useUser = () => {
  const [user, setUser] = useState<UserPayload | undefined>(undefined);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("/api/auth/me");
        setUser((response.data as UserPayload) || undefined);
      } catch (error) {
        setUser(undefined);
      }
    };

    checkAuth();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      await axios.post("/api/auth/login", { username, password });
      const response = await axios.get("/api/auth/me");
      setUser((response.data as UserPayload) || undefined);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    axios.post("/api/auth/logout");
    setUser(undefined);
  };

  return { user, login, logout };
};

export default useUser;
