import React from "react";
import Cabecalho from "./components/Cabecalho";
import Cartao from "./components/Cartao";
import FindISS from "./components/FindISS";

const App =() => {
return(
  <div>
    <Cabecalho/>
    <main>
      <Cartao titulo="Rastreamento da ISS" descricao="Acompanhe em tempo real a Localização da ISS!" 
      imagem="src\img\gato.jpeg" />

      <FindISS/>
    
    </main>

  </div>
);
};
export default App;