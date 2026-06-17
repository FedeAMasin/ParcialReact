import { useState } from 'react';

function FormularioEditarPost({ post, onUpdate, onCancelar }) {
  const [titulo, setTitulo] = useState(post?.title || '');
  const [cuerpo, setCuerpo] = useState(post?.body || '');
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');

  const manejarSubmit = async (e) => {
    e.preventDefault();
    if (!titulo.trim() || !cuerpo.trim()) {
      setError('El título y el cuerpo son obligatorios');
      return;
    }

    setEnviando(true);
    setError('');

    try {
      await onUpdate(post.id, { title: titulo, body: cuerpo, userId: 1 });
      onCancelar();
    } catch (err) {
      setError(err.message || 'Error al actualizar el post');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-warning text-dark">
        <h5 className="mb-0">Editar post</h5>
      </div>
      <div className="card-body">
        <form onSubmit={manejarSubmit}>
          <div className="mb-3">
            <label htmlFor="edit-titulo" className="form-label fw-bold">
              Título
            </label>
            <input
              type="text"
              id="edit-titulo"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edit-cuerpo" className="form-label fw-bold">
              Cuerpo
            </label>
            <textarea
              id="edit-cuerpo"
              className="form-control"
              rows="4"
              value={cuerpo}
              onChange={(e) => setCuerpo(e.target.value)}
              required
            ></textarea>
          </div>
          {error && (
            <div className="alert alert-danger mb-3" role="alert">
              {error}
            </div>
          )}
          <div className="d-flex gap-2">
            <button
              type="submit"
              className="btn btn-warning"
              disabled={enviando}
            >
              {enviando ? 'Guardando...' : 'Guardar cambios'}
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={onCancelar}
              disabled={enviando}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioEditarPost;