import React from 'react';
import { Link } from 'react-router-dom';

// Componente de navegación para la app principal, define la interfaz visual y los enlaces de las rutas.  
//cada li es un link a una ruta diferente, por ejemplo: Inicio, consulta por id, etc.( aca deberian ir las rutas de los componentes de angel y mari.)
const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>        
      </ul>
    </nav>
  );
};

export default NavigationBar;
