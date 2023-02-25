import './Header.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../context/themeContext';
import { UserContext } from '../context/userContext';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
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
          <li>
            <input type="checkbox" className="modeTheme" onChange={() => toggleTheme()} />
          </li>
        </ul>
        {user && <button onClick={() => logout()}>Logout</button>}
      </nav>
    </header>
  );
};
export default Header;
