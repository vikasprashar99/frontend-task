import { createContext, useState, useEffect, type ReactNode } from 'react';
import type { User } from '../types';
import { findUserByCredentials } from '../lib/mock-data';

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('atlys-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, pass: string) => {
    const foundUser = findUserByCredentials(email, pass);
    if (foundUser) {
      setUser(foundUser.user);
      localStorage.setItem('atlys-user', JSON.stringify(foundUser.user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('atlys-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};