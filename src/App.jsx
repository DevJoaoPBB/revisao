import React from "react";
import Cabecalho from "./components/Cabecalho";
import Cartao from "./components/Cartao";
import Contador from "./components/Contador";
import Numeros from "./components/Numeros";

const App =() => {
return(
  <div>
    <Cabecalho/>

    <main>
      <h2>Página Inicial</h2>
      <Cartao titulo="Exame de Gato" descricao="Check-up Completo de saúde para seu gato." 
      imagem="src\img\gato.jpeg" />
      <Contador/>
    </main>

  </div>
);
};
export default App;