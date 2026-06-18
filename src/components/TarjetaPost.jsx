import { Link } from 'react-router-dom';

function TarjetaPost({ post, onDelete }) {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <div>
          <h5 className="card-title mb-1">{post.title}</h5>
          <p className="card-text text-muted mb-0 small">
            {post.body.substring(0, 100)}{post.body.length > 100 ? '...' : ''}
          </p>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <Link to={`/posts/${post.id}`} className="btn btn-outline-primary btn-sm">
            Ver detalle
          </Link>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(post.id)}
            aria-label={`Eliminar post ${post.id}`}
          >
            Eliminar
          </button>   {/*no se si correspondia pero lo sacamos del parcial y lo modificamos para que use props */}
        </div>
      </div>
    </div>
  );
}

export default TarjetaPost;