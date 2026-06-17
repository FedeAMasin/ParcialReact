import React from 'react';
import { Link } from 'react-router-dom';

// Componente de navegación para la app principal, define la interfaz visual y los enlaces de las rutas.  
//cada li es un link a una ruta diferente, por ejemplo: Inicio, consulta por id, etc.( aca deberian ir las rutas de los componentes de angel y mari.)
const NavigationBar = () => {
  return (
    <nav className="bg-info-subtle text-dark fw-bold p-3 d-flex gap-3">
      {/* Aca vamos agregando los links a las rutas de los componentes que agreguen.*/}
        <Link to="/" className="link-dark text-decoration-underline">
        Inicio
        </Link>
        <Link to="/hooks" className="link-dark text-decoration-underline">
        Hooks
        </Link>       
      
    </nav>
  );
};

export default NavigationBar;
