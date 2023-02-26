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
            <a href="/">
              <img
                src="https://res.cloudinary.com/depifliz3/image/upload/v1677328528/samples/Motos/531-5311438_motobike-logo-hobbiesxstyle-logos-para-dibujar-de-motos_hpqcyh.png"
                alt="logo-cms"
              />
            </a>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!user && (
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to="/Company">Company</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/About">About</NavLink>
          </li>

          {user && (
            <li>
              <button className="enter" onClick={() => logout()}>
                Logout
              </button>
            </li>
          )}
          <li>
            <input type="checkbox" className="modeTheme" onChange={() => toggleTheme()} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
