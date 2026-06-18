import { useRef, useEffect } from "react";

function FormularioRef() {

  const inputRef = useRef(null); /*creamos una referencia */

  useEffect(() => {
    inputRef.current.focus();/*Conh el .current.focus dejamos el cursor dentro del campo. */
  }, []);

  return (
    <div>
      <h2>Ejemplo del useRef</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese un título"
      /> 
    </div>
  );
}

export default FormularioRef;
