import { NavLink } from 'react-router-dom';

import { useAuthentication } from '../../hooks/useAutentication';

import { useAuthValue } from '../../context/AuthContext';

import Logo from '../Logo';

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <div
      className="navbar navbar-expand-lg container-fluid bg-dark p-3"
      data-bs-theme="dark"
    >
      <nav className="container d-flex justify-content-between gap-3">
        <h1>
          <NavLink className="navbar-brand text-warning fs-2" to="/">
            <Logo />
          </NavLink>
        </h1>

        <div>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav nav-pills d-flex gap-4">
            <li className="nav-item">
              <NavLink className="nav-link text-light py-2 px-4" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light py-2 px-4" to="/about">
                Sobre
              </NavLink>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-light py-2 px-4"
                    to="/posts/create"
                  >
                    Novo Post
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-light py-2 px-4"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav d-flex justify-content-end gap-4 w-100">
            {!user && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link btn btn-outline-light py-2 px-4"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link btn btn-outline-light py-2 px-4"
                    to="/register"
                  >
                    Registrar
                  </NavLink>
                </li>
              </>
            )}
            {user && (
              <li className="nav-item">
                <button
                  onClick={logout}
                  className="btn btn-outline-danger py-2 px-4"
                >
                  Sair
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
