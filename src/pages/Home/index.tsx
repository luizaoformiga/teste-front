import React, { useState } from 'react';
import { Button } from '../../components/index';
import Response from './repository/responseInterface';

const Home: React.FC = () => {
  const [response, setResponse] = useState<any>();

  return (
    <>
     {response ? 
      response.map((index: Response, key: any) => (
      <div key={key}>
        <h1>{index.name}</h1>
        <p>{index.email}</p>
        <p>{index.estado}</p>
        <p>{index.image}</p>
        <Button.ButtonLogOut value="Log out" />
      </div> 
     
      )) : <p>Error</p>}
    </>
  );
};

export default Home;
