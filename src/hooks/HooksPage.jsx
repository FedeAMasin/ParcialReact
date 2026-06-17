import { useState } from "react";

import { TemaContext } from "../context/TemaContext";

import MostrarTema from "../components/MostrarTema";
import EstadoTema from "../components/EstadoTema";
import FormularioRef from "../components/FormularioRef";

function HooksPage() {
  const [tema, setTema] = useState("claro");

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      <div className={tema}>
    

        <MostrarTema />

        <EstadoTema />

        <FormularioRef />
      </div>
    </TemaContext.Provider>
  );
}

export default HooksPage;