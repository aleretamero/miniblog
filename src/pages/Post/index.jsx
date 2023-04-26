import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument('posts', id);

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center p-5">
      {loading && <p>Carregando post...</p>}
      {post && (
        <div className="card">
          <img
            src={post.image}
            className="card-img-top img-fluid"
            alt={post.title}
          />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <p className="card-text">Este post trata sobre:</p>
            <div className="d-flex gap-2">
              {post.tagsArray.map(tag => (
                <p key={tag}>#{tag}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
