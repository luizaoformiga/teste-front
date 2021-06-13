import { useContext } from 'react';
import { AuthContext } from './auth';

export function UseAuth() {
    const context = useContext(AuthContext);
  
    return context;
}