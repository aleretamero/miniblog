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
    <div className="container-fluid p-3">
      <div className="container d-flex flex-column justify-content-start align-items-center gap-5">
        <div className="d-flex flex-column justify-content-start align-items-center gap-3">
          <h2>Veja os nossos posts mais recentes</h2>
          <form className="input-group" onSubmit={handleSubmit}>
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
              type="submit"
            >
              Pesquisar
            </button>
          </form>
        </div>

        <div className="d-flex flex-wrap gap-5 justify-content-center align-items-center text-center">
          {loading && <p>Carregando...</p>}
          {posts && posts.map(post => <PostDetail key={post.id} post={post} />)}
          {posts && posts.length === 0 && (
            <div>
              <p>Não foram encontrados posts</p>
              <Link to="/posts/create" className="btn btn-outline-dark">
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
