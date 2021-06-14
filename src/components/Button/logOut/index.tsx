import React from 'react';
import ComponentButtonProps from './repository/buttonInterface';
import { UseAuth } from '@/contexts/useAuth';

const ButtonLogOut: React.FC<ComponentButtonProps> = ({ value }) => {
    const { signed, Logout } = UseAuth();
    console.log(signed);

    const handleLogout = () => {
        Logout();
    }

    return(
        <button onClick={handleLogout}>{value}</button>
    )
}

export default ButtonLogOut;