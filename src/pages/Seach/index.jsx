import { Link } from 'react-router-dom';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

import PostDetail from '../../components/PostDetail';

const Search = () => {
  const query = useQuery();
  const search = query.get('q');
  const { documents: posts } = useFetchDocuments('posts', search);

  return (
    <div className="container-sm min-vh-100 d-flex flex-column gap-3 justify-content-center align-items-center">
      <h2 className="fs-2">Busca</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
        {posts && posts.length === 0 && (
          <div className="d-flex flex-column ">
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </div>
        )}
        {posts && posts.map(post => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
