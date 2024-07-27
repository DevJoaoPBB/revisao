import React, { useEffect, useState } from "react";

const Numeros = ({ numero }) => {
  const [dados, setDados] = useState("");

  useEffect(() => {
    if (numero !== undefined && numero !== null) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
        .then((resposta) => resposta.json())
        .then((texto) => {
            const { name, weight} = texto;
            setDados(`Pokemon: ${name} - Peso: ${weight}`)
        }
    )
        
    }
  }, [numero]); // O useEffect depende de "numero"

  return <h1>Resultado: {dados}</h1>;
};

export default Numeros;
