import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark p-3">
      <footer className="container py-3 my-3 border-top">
        <h3 className="text-light text-center">
          Escreva sobre o que você tem interesse!
        </h3>

        <div className="d-flex flex-wrap justify-content-between align-items-center my-5 gap-3">
          <div>
            <NavLink className="text-warning text-decoration-none fs-2" to="/">
              Mini <span className="text-warning-emphasis">Blog</span>
            </NavLink>
          </div>

          <div>
            <span className="text-light">
              &copy; 2023 code8bit Projeto Desenvolvido por Alexandre Retamero
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
