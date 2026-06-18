import { Link } from 'react-router-dom';
import MostrarTema from './MostrarTema';

const NavigationBar = () => {
  return (
    <nav className="bg-info-subtle text-dark fw-bold p-3 d-flex gap-3 align-items-center">
      <MostrarTema />
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
