import React, { useState } from 'react';
import { Button } from '@/components/index';
import { useHistory } from "react-router-dom";
import ScanValue from './repository/scanValue';

const Login: React.FC = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/home");
  }

  const [user, setUser] = useState({
    email: "teste@front.com",
    password: "teste123"
  }) 

  const handleInputEmail = (event: ScanValue) => {
    setUser({ ...user, email: event.target.value }); 
  }

  const handleInputPassword = (event: ScanValue) => {
    setUser({ ...user, password: event.target.value }); 
  }

  return (
    <main>
      <h1>Login</h1>
      <p>E-mail</p>
      <input
        value={user.email}  
        type="email"  
        required
        onChange={handleInputEmail} 
      />

      <p>Senha</p>
      <input 
        value={user.password}
        type="password"
        required
        onChange={handleInputPassword}   
      />
      
      <Button.ButtonLogin value="Login" />
    </main>
  );
};

export default Login;
