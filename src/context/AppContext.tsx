import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, findUserByEmail } from '../data/mockData';

interface AppContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string) => boolean;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string): boolean => {
    const foundUser = findUserByEmail(email);
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const isLoggedIn = user !== null;

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};