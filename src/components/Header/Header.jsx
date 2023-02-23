import './Header.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../context/userContext';
const Header = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>{!user && <NavLink to="/Login">Login</NavLink>}</li>
          <li>{user && <NavLink to="/Company">Company</NavLink>}</li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
        </ul>
        {user && <button onClick={() => logout()}>Logout</button>}
      </nav>
    </header>
  );
};
export default Header;
