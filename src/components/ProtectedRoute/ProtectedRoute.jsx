import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../context/userContext';

const ProtectedRoute = ({ children }) => {
  const { user, password } = useContext(UserContext);

  if (!user || !password) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
