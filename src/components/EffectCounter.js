import React, { useEffect, useState } from 'react';

const ONE = 1000;

function EffectCounter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Ta funfando');
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, ONE);

    /**
     * Sem o efeito de limpeza abaixo,
     * interval continuaria a rodar o timer,
     * mesmo o componente não estando mais na tela
     *
     * comente as linhas indicadas, clique no botão Agora Apague!
     * e veja o que acontece com o timer!
     * */

    // comentar
    return () => {
      console.log('Morreu');
      clearInterval(interval);
    };
    // comentar
  }, []);

  return (
    <div>
      Tempo decorrido:
      {' '}
      {seconds}
      {' '}
      segundos.
    </div>
  );
}

export default EffectCounter;
