import { Link } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.id;

  // posts do usuario
  const { documents: posts, loading } = useFetchDocuments('posts', null, uid);

  const { deleteDocument } = useDeleteDocument('posts');

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center gap-3">
      <div>
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
      </div>
      <div className="bg-dark text-light w-100 text-center p-3">
        {posts && posts.length === 0 ? (
          <div>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn btn-outline-light">
              Criar primeiro post
            </Link>
          </div>
        ) : (
          <>
            <div className="d-flex pb-4">
              <div className="w-50 fw-bold fs-2">Título</div>
              <div className="w-50 fw-bold fs-2">Ações</div>
            </div>

            <div className="d-flex flex-column gap-3">
              {posts &&
                posts
                  .filter(post => post.createdBy === user.displayName)
                  .map(post => (
                    <div
                      key={post.id}
                      className="d-flex align-items-center border-top pt-3"
                    >
                      <p className="w-50 m-0 fw-bold">{post.title}</p>
                      <div className="w-50 d-flex justify-content-center gap-3 flex-wrap">
                        <Link
                          to={`/posts/${post.id}`}
                          className="btn btn-primary"
                          style={{ width: '100px' }}
                        >
                          Ver
                        </Link>
                        <Link
                          to={`/posts/edit/${post.id}`}
                          className="btn btn-primary"
                          style={{ width: '100px' }}
                        >
                          Editar
                        </Link>
                        <button
                          onClick={() => deleteDocument(post.id)}
                          className="btn btn-danger"
                          style={{ width: '100px' }}
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
