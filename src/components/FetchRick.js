import React, { useEffect, useState } from 'react';

function FetchRick() {
  const [characters, setCharacters] = useState({});
  const [loading, setLoading] = useState(true);

  /** parte 2 */
  useEffect(() => {
    const getCharacters = async () => {
      const request = await fetch('https://rickandmortyapi.com/api/character');
      const data = await request.json();
      setCharacters(data.results);
      setLoading(false);
    };

    getCharacters();
  }, []);

  return loading ? <p>Fica Tranquileba</p> : (
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
