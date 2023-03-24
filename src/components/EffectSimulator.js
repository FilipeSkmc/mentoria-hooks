import React, { useState, useEffect } from 'react';

function EffectSimulator() {
  const [stateA, setStateA] = useState(0);
  const [stateB, setStateB] = useState(0);

  useEffect(() => {
    console.log('Sou o efeito sem array de depencencias, olhem pra mim!');
  });

  useEffect(() => {
    console.log(
      'Sou o efeito com array de depencencias vazio, executo quando o componente',
    );

    return () => {
      console.log('Componente desmontou? Executei!');
    };
  }, []);

  useEffect(() => {
    console.log(
      'Sou o efeito com array de depencencia com stateA, executo quando ele atualiza',
    );
  }, [stateA]);

  useEffect(() => {
    console.log(
      'Sou o efeito com array de depencencia com stateB, executo quando ele atualiza',
    );
  }, [stateB]);

  return (
    <div>
      <h3>Effect Simulator</h3>
      <button
        onClick={ () => setStateA(stateA + 1) }
      >
        { `State A: ${stateA}` }
      </button>
      <button
        onClick={ () => setStateB(stateB + 1) }
      >
        { `State B: ${stateB}` }
      </button>
    </div>
  );
}

export default EffectSimulator;
