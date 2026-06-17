import usePosts from '../hooks/usePosts';
import TarjetaPost from '../components/TarjetaPost';

const Inicio = () => {
  const { posts, loading, error, handleDelete } = usePosts();

  return (
    <div className="container mt-4">
      <h1>Posts</h1>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2">Cargando posts...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          <strong>Error:</strong> {error}
          <button
            className="btn btn-sm btn-outline-danger ms-2"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4 mb-4">
              <TarjetaPost post={post} onDelete={handleDelete} />
            </div>
          ))}
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="text-center py-5">
          <p className="text-muted">No hay posts disponibles.</p>
        </div>
      )}
    </div>
  );
};

export default Inicio;