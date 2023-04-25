import { Link } from 'react-router-dom';

const PostDetail = ({ post }) => {
  return (
    <>
      <div className="card text-bg-dark mb-3">
        <img src={post.image} alt={post.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-title">{post.createdBy}</p>
          {post.tagsArray.map(tag => (
            <p className="card-text" key={tag}>
              <span>#</span>
              {tag}
            </p>
          ))}
          <Link to={`/posts/${post.id}`} className="btn btn-primary py-2 px-4">
            Ler
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
