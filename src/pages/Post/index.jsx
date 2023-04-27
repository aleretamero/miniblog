import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument('posts', id);

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center p-1">
      {loading && <p>Carregando post...</p>}
      {post && (
        <div className="card border border-5 border-dark">
          <img
            src={post.image}
            className="img-fluid border-bottom border-2 border-dark"
            alt={post.title}
          />
          <div className="card-body  d-flex flex-column gap-3">
            <h5 className="card-title text-center mb-3 fs-1">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <div className="d-flex flex-wrap gap-2">
              <p className="card-text text-sm fw-bold m-0">
                Este post trata sobre:
              </p>
              {post.tagsArray.map(tag => (
                <p className='m-0' key={tag}>#{tag}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
