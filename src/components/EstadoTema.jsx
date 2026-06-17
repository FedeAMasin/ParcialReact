import { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

function EstadoTema() {

  const { tema } = useContext(TemaContext);

  return (
    <div>
     
      <p>El tema actual es: {tema}</p>
    </div>
  );
}

export default EstadoTema;

/* consume el contexto
 y muestra el tema actual*/