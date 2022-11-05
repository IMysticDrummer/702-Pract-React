import { Navigate, useLocation } from 'react-router-dom';
import { useLogin } from './context';

const RequireAuth = ({ children }) => {
  const { isLogged } = useLogin();
  const location = useLocation();
  if (!isLogged) {
    return (
      <Navigate
        to='/login'
        state={{ from: location }}
      />
    );
  }
  return children;
};

export default RequireAuth;