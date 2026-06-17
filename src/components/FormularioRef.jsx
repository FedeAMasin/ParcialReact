import { useRef, useEffect } from "react";

function FormularioRef() {

  const inputRef = useRef(null); /*creamos una referencia */

  useEffect(() => {
    inputRef.current.focus();/* cuando abrimos la pantalla, cursor dentro del input automaticamente*/
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
