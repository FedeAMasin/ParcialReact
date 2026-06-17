import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostById, updatePost } from '../services/posts.service';
import FormularioEditarPost from '../components/FormularioEditarPost';

function PaginaDetallePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    const cargarPost = async () => {
      try {
        setLoading(true);
        const data = await getPostById(id);
        setPost(data);
      } catch (err) {
        setError(err.message || 'No se pudo cargar el post');
      } finally {
        setLoading(false);
      }
    };

    cargarPost();
  }, [id]);

  const manejarActualizar = async (postId, datos) => {
    const actualizado = await updatePost(postId, datos);
    setPost(actualizado);
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-danger d-inline-block">
          <h4>Error</h4>
          <p>{error}</p>
          <Link to="/" className="btn btn-primary mt-2">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-warning">
          Post no encontrado
        </div>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          ← Volver al listado
        </Link>
      </div>

      {editando ? (
        <FormularioEditarPost
          post={post}
          onUpdate={manejarActualizar}
          onCancelar={() => setEditando(false)}
        />
      ) : (
        <div className="card">
          <div className="card-header bg-light">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Detalle del Post</h4>
              <button
                className="btn btn-outline-warning btn-sm"
                onClick={() => setEditando(true)}
              >
                Editar
              </button>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title mb-3">{post.title}</h2>
            <p className="card-text white-space-pre-wrap">{post.body}</p>
            <hr />
            <small className="text-muted">
              ID: {post.id} | Usuario: {post.userId}
            </small>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaginaDetallePost;