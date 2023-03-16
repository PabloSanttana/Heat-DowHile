import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useCallback,
} from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CLIENT_ID } from "../../config";

import { SettingsProvider } from "./settings";
import api from "@src/services/api";

type AuthProviderProps = {
  children: React.ReactNode;
};
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
type AuthorizationResponse = {
  params: {
    code?: string;
  };
};

type AuthContextProps = {
  user: User;
  isLoading: boolean;
  SignIn: () => void;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as User);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUserProfiler();
  }, []);

  const SignIn = async () => {
    setIsLoading(true);
    try {
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
      const { params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (params && params.code) {
        const response = await api.post<AuthResponse>("/authenticate/mobile", {
          code: params.code,
        });

        const { token, user } = response.data;

        await AsyncStorage.setItem("@dowhile:token", token);
        api.defaults.headers.common = { Authorization: `bearer ${token}` };
        setUser(user);
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  async function getUserProfiler() {
    const token = await AsyncStorage.getItem("@dowhile:token");

    if (token) {
      api.defaults.headers.common = { Authorization: `bearer ${token}` };
      try {
        const { data } = await api.get<User>("profiler");
        setUser(data);
      } catch (error) {
        api.defaults.headers.common = {};
        AsyncStorage.removeItem("@dowhile:token");
      }
    }
  }

  const logout = useCallback(() => {
    api.defaults.headers.common = {};
    AsyncStorage.removeItem("@dowhile:token");
    setUser({} as User);
  }, []);

  return (
    <SettingsProvider>
      <AuthContext.Provider value={{ user, SignIn, isLoading, logout }}>
        {children}
      </AuthContext.Provider>
    </SettingsProvider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth, AuthProvider };
