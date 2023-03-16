import React, { useState, useContext, createContext, useEffect } from "react";
import { SettingProvider } from "./setting";
import { useRouter } from "next/router";

import api from "@/services/api";

export type User = {
  id: string;
  name: string;
  github_id: number;
  avatar_url: string;
  login: string;
};

type AuthResponse = {
  user: User;
  token: string;
};

type AuthContextProps = {
  user: User;
  isLoading: boolean;
  handleGithubCodeAuth: (code: string) => void;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: React.ReactNode;
};

var currentCode = "";

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as User);
  const [isLoading, setIsLoading] = useState(false);

  async function handleGithubCodeAuth(code: string) {
    if (currentCode !== "") return;
    setIsLoading(true);
    currentCode = code;
    try {
      const response = await api.post<AuthResponse>("/authenticate", {
        code,
      });
      const { token, user } = response.data;
      localStorage.setItem("@dowhile:token", token);
      api.defaults.headers.common = { Authorization: `bearer ${token}` };
      setUser(user);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getUserProfiler() {
    const token = localStorage.getItem("@dowhile:token");
    if (token) {
      api.defaults.headers.common = { Authorization: `bearer ${token}` };
      try {
        const { data } = await api.get<User>("profiler");
        setUser(data);
      } catch (error) {
        api.defaults.headers.common = {};
        localStorage.removeItem("@dowhile:token");
      }
    }
  }

  function logout() {
    api.defaults.headers.common = {};
    localStorage.removeItem("@dowhile:token");
    setUser({} as User);
  }

  useEffect(() => {
    getUserProfiler();
  }, []);

  return (
    <SettingProvider>
      <AuthContext.Provider
        value={{
          user,
          handleGithubCodeAuth,
          logout,
          isLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </SettingProvider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
