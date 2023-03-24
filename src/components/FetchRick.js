import React, { useEffect, useState } from 'react';
import { getCharacters } from '../services/api';

function FetchRick() {
  const [characters, setCharacters] = useState({});
  const [loading, setLoading] = useState(true);

  /** parte 2 */
  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      });
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
