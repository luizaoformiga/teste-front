import { loginUser } from '@/requests/loginRequest';
import React, { createContext, useState, useEffect } from 'react';
import * as api from '../services/generic';
import AuthContextData from './repository/authContextData';

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login(userData: object) {
    //const response = await api.post('http://jrwee.mocklab.io', userData);
    const response = loginUser(userData);

    setUser(response);
    api.defaults.headers.Authorization = `Bearer ${(await response).data}`;

    sessionStorage.setItem('@App:user', JSON.stringify((await response).data));
    sessionStorage.setItem('@App:token', (await response).data);
  }

  function Logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};


