import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TemaContext } from '../context/TemaContext';

const NavigationBar = () => {
  const { tema, setTema } = useContext(TemaContext);

  return (
    <nav className="bg-info-subtle text-dark fw-bold p-3 d-flex gap-3 align-items-center">
      <button
        className="btn btn-outline-secondary me-3"
        onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}
        aria-label="Cambiar tema"
      >
        Tema
      </button>
      <Link to="/" className="link-dark text-decoration-underline">
        Inicio
      </Link>
      <Link to="/nuevo-post" className="link-dark text-decoration-underline">
        Nuevo Post
      </Link>       
    </nav>
  );
};

export default NavigationBar;
