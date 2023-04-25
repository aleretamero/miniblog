import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import PostDetail from '../../components/PostDetail';

const Home = () => {
  const [query, setQuery] = useState('');
  const { documents: posts, loading } = useFetchDocuments('posts');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="container d-flex flex-column justify-content-center align-items-center gap-5">
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center gap-3">
          <h2>Veja os nossos posts mais recentes</h2>
          <form className="input-group mb-3" onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Ou busque por tags..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              className="btn btn-outline-dark"
              id="button-addon2"
              type="button"
            >
              Pesquisar
            </button>
          </form>
        </div>

        <div className="d-flex flex-wrap gap-5 justify-content-center align-items-center ">
          {loading && <p>Carregando...</p>}
          {posts && posts.map(post => <PostDetail key={post.id} post={post} />)}
          {posts && posts.length === 0 && (
            <div>
              <p>Não foram encontrados posts</p>
              <Link to="/posts/create" className="btn">
                Criar primeiro post
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
