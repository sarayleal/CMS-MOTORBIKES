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
      <nav className="hamburguesa">
        <ul>
          <li className="dropdown">
            <img
              src="https://res.cloudinary.com/depifliz3/image/upload/v1677428433/samples/Motos/image_xece6n.png
"
              alt="menu"
            />
            <ul className="dropdown-menu">
              <li>
                {' '}
                <a href="/company">company</a>
              </li>
              <li>
                <a href="/about">about</a>
              </li>
              <li>
                <a href="/">home</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav className="moto">
        <ul>
          <li>
            <a href="/">
              <img
                src="https://res.cloudinary.com/depifliz3/image/upload/v1677328528/samples/Motos/531-5311438_motobike-logo-hobbiesxstyle-logos-para-dibujar-de-motos_hpqcyh.png"
                alt="logo-cms"
              />
            </a>
          </li>
        </ul>
      </nav>
      <nav className="nav1">
        <ul>
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
        </ul>
      </nav>
      <nav className="navLogout">
        {user && (
          <ul>
            <li>
              <button className="enter" onClick={() => logout()}>
                Logout
              </button>
              <li>
                <input
                  type="checkbox"
                  className="modeTheme"
                  onChange={() => toggleTheme()}
                />
              </li>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
export default Header;
