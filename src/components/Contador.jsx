import React, { useState } from "react";
import Numeros from "./Numeros";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <Numeros numero={contador} />
    </div>
  );
};

export default Contador;
