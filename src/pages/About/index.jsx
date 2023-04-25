import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mt-5 min-vh-100 d-flex flex-column justify-content-center align-items-center gap-5">
      <h2 className="my-5">
        Sobre o Mini <span>Blog</span>
      </h2>
      <p className="fs-2">
        Bem-vindo ao Mini Blog! Aqui você poderá postar sobre diversos temas,
        desde tecnologia até saúde e bem-estar.
      </p>
      <p className="fs-2">
        O projeto consiste em um blog feito com React no front-end, Firebase no
        back-end, e utiliza Bootstrap para criar um design moderno, responsivo e
        atraente para nossos leitores.
      </p>

      <div>
        <Link
          to="/posts/create"
          className="btn btn-primary btn-lg m-5 py-3 px-5 fs-2"
        >
          Criar post
        </Link>
      </div>
    </div>
  );
};

export default About;
