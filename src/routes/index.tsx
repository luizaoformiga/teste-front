import React from 'react';
import { UseAuth } from '../contexts/useAuth';
import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';

const Routes: React.FC = () => {
  const { signed } = UseAuth();

  return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;
