import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const PostDetail = ({ post }) => {
  return (
    <Link
      to={`/posts/${post.id}`}
      className={`${styles.card} card text-bg-dark mb-3 p-1 shadow-lg text-decoration-none`}
    >
      <div
        className={styles.imgCard}
        style={{
          backgroundImage: `url(${post.image})`,
        }}
      />
      <div
        className="card-body d-flex flex-column justify-content-between align-items-center"
        style={{ height: '180px' }}
      >
        <h5 className="card-title">{post.title}</h5>
        <p className="card-title fs-2 fw-bold">{post.createdBy}</p>
        <div className='d-flex flex-wrap'>
          {post.tagsArray.map(tag => (
            <span className="card-text" key={tag}>
              <span className='text-primary'>#</span>{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PostDetail;
