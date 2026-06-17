import { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

function MostrarTema() {
const { tema, setTema } = useContext(TemaContext);

  return (
    <>
    
    <button onClick={() =>
     setTema(tema === "claro" ? "oscuro" : "claro")

    }
    >
  Cambiar Tema
</button>
</>
  );
}

export default MostrarTema;

