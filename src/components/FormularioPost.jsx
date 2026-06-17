import { useState, useRef, useEffect } from 'react';

function FormularioPost({ onCreate }) {
  const inputRef = useRef(null);
  const [titulo, setTitulo] = useState('');
  const [cuerpo, setCuerpo] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const manejarSubmit = async (e) => {
    e.preventDefault();
    if (!titulo.trim() || !cuerpo.trim()) {
      setError('El título y el cuerpo son obligatorios');
      return;
    }

    setEnviando(true);
    setError('');

    try {
      await onCreate({ title: titulo, body: cuerpo, userId: 1 });
      setTitulo('');
      setCuerpo('');
    } catch (err) {
      setError(err.message || 'Error al crear el post');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Crear nuevo post</h5>
      </div>
      <div className="card-body">
        <form onSubmit={manejarSubmit}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label fw-bold">
              Título
            </label>
            <input
              ref={inputRef}
              type="text"
              id="titulo"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ingrese el título del post"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cuerpo" className="form-label fw-bold">
              Cuerpo
            </label>
            <textarea
              id="cuerpo"
              className="form-control"
              rows="4"
              value={cuerpo}
              onChange={(e) => setCuerpo(e.target.value)}
              placeholder="Ingrese el contenido del post"
              required
            ></textarea>
          </div>
          {error && (
            <div className="alert alert-danger mb-3" role="alert">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={enviando}
          >
            {enviando ? 'Creando...' : 'Crear Post'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioPost;