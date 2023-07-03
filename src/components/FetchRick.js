import React, { useEffect, useState } from 'react';
import { getCharacters } from '../services/api';

function FetchRick() {
  // estado que irá receber os dados da API
  const [characters, setCharacters] = useState([]);
  // estado que controla o loading
  const [loading, setLoading] = useState(true);

  /**
   * Efeito de montagem do componente, com []
   * ATENÇÃO: a Callback do useEffect, nunca poderá ser assincrona.
   * O useEffect tem sua natureza síncrona.
   *
   * Para realizar chamadas assincronas (async / await) dentro do useEffect, você deverá
   * criar uma função assincrona dentro do useEffect, colocar a lógica
   * de requisição e acoes dentro dela e executar a função logo no final.
   * */

  useEffect(() => {
    // função assincrona que faz a requisição a API e atribui valores aos estados
    const getDataApi = async () => {
      const data = await getCharacters();
      setCharacters(data);
      setLoading(false);
    };
    // chama a função para ser executada
    getDataApi();
  }, []);

  // elemento de loading
  if (loading) {
    return <p>Fica Tranquileba</p>;
  }

  return (
    <div>
      <h3>Rick And Morty - Fetch</h3>
      <div className="box">
        {characters.map(({ name, image }) => (
          <div className="container" key={ name }>
            <h3>{name}</h3>
            <img src={ image } alt={ name } />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchRick;
