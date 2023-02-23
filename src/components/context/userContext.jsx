import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const login = (data, pass) => {
    setUser(data);
    setPassword(pass);
    navigate('/Company');
  };

  const logout = () => {
    setUser(null);
    setPassword(null);
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ user, password, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
