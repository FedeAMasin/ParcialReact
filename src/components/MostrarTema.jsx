import { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

function MostrarTema() {
const { tema, setTema } = useContext(TemaContext);

  return (
    <button 
      className="btn btn-outline-secondary me-3"
      onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}
      aria-label="Cambiar tema"
    >
      Tema
    </button>
  );
}

export default MostrarTema;
