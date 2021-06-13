import React from 'react';
import { Button } from '../../components/index';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Nome do usuario</h1>
      <p>E-mail</p>
      <p>Estado</p>
      <Button.ButtonLogOut value="Log out" />
    </div>
  );
};

export default Home;
