import { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/authContext';

const LoadingScreen = () => {
  const { localSignin } = useContext(AuthContext);

  useEffect(() => {
    localSignin();
  }, []);

  return null;
};

export default LoadingScreen;
