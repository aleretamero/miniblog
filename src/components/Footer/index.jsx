import { NavLink } from 'react-router-dom';

import Logo from '../Logo';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark p-3">
      <footer className="container py-3 my-3 border-top">
        <h3 className="text-light text-center">
          Escreva sobre o que você tem interesse!
        </h3>

        <div className="d-flex flex-column justify-content-center align-items-center my-5 gap-5">
          <div>
            <NavLink className="text-warning text-decoration-none fs-2" to="/">
              <Logo />
            </NavLink>
          </div>

          <div className="text-light text-center">
            <span>
              &copy; 2023 Code8Bit Projeto Desenvolvido por Alexandre Retamero
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
