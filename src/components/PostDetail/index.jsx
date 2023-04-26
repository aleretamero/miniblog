import { Link } from 'react-router-dom';

const PostDetail = ({ post }) => {
  return (
    <div
      className="card text-bg-dark mb-3 p-1"
      style={{ width: '250px', height: '400px', overflow: 'hidden' }}
    >
      <img
        src={post.image}
        alt={post.title}
        className="card-img-top"
        style={{ height: '200px' }}
      />
      <div
        className="card-body d-flex flex-column justify-content-between align-items-center"
        style={{ height: '200px' }}
      >
        <h5 className="card-title">{post.title}</h5>
        <p className="card-title">{post.createdBy}</p>
        <div>
          {post.tagsArray.map(tag => (
            <span className="card-text m-1" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
        <Link
          to={`/posts/${post.id}`}
          className="btn btn-primary w-100 py-2 d-block"
        >
          Ler
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
