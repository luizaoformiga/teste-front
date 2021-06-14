import api from '../services/api';
import Request from './repository/requestInterface';

export const loginUser = async ({ email, password }: Request) => {
  const response = await api
    .post('/user/login', { email, password })

    if(response.status === 404) {
      throw new Error("NOT FOUND"); 
    } 
  
  return response;
};
