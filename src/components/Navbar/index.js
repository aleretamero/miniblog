import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : null)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : null)}
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : null)}
            to="/register"
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : null)}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
