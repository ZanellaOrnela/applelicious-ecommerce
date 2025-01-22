'use client';
import { IUserSession } from '@/types';
import { useState, useEffect, createContext, useContext } from 'react';

export interface AuthContextProps {
  userData: IUserSession | null;
  setUserData: (userData: IUserSession | null) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  userData: null,
  setUserData: () => {},
});

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<IUserSession | null>(null);

  useEffect(() => {
    if (userData) {
      localStorage.setItem('userSession', JSON.stringify({token: userData.token, user:userData.user}));
    }
  }, [userData]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userSession')!);
    setUserData(userData);
  }, []);

  return <AuthContext.Provider value = {{userData, setUserData}}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext)