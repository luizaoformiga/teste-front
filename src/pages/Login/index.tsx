import React from 'react';
import { Button } from '../../components/index';

const Login: React.FC = () => {
  return (
    <main>
      <h1>Login</h1>
      <p>E-mail</p>
      <input 
        type="email"   
      />

      <p>Senha</p>
      <input 
        type="password"   
      />
      
      <Button.ButtonLogin value="Login" />
    </main>
  );
};

export default Login;
