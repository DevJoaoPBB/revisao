import React, {useState} from "react";

const Contador = () =>{
    const [contador, setContador] = useState(0);

    return(
        <div>

            <p>Contagem: {contador}</p>
            <button onClick={() => setContador( contador + 1)}>Incrementar</button>
        </div>
    );
};
export default Contador;