import { createContext, useContext, useEffect, useState } from "react";

type User = {
  username: string;
  avatarUrl: string;
};

type AuthProviderState = {
  user?: User;
  setUser: (user: User | null) => void;
};

const initialState: AuthProviderState = {
  setUser: () => null,
};

const AuthContext = createContext<AuthProviderState>(initialState);

export function AuthProvider({
  children,
  storageKey = "user",
}: {
  children: React.ReactNode;
  storageKey?: string;
}) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem(storageKey);
    return storedUser ? JSON.parse(storedUser) : undefined;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(storageKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(storageKey);
    }
  }, [storageKey, user]);

  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }

  return context;
}
