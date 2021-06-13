import React from 'react';
import ButtonComponentProps from './repository/buttonInterface';
import { UseAuth } from '../../../contexts/useAuth';

const ButtonLoging: React.FC<ButtonComponentProps> = ({ value }) => {
    const { signed, Login } = UseAuth();
  
    console.log(signed);
    
    const handleLogin = async () => {
      await Login({
        email: "teste@front.com",
        password: "teste123"
      });
    }
    
    return(
        <button onClick={handleLogin}>{value}</button>
    )
}

export default ButtonLoging;
