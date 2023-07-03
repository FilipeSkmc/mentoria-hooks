import { useState } from 'react';
import './App.css';
import EffectCounter from './components/EffectCounter';

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div className={ `App-${mode ? 'light' : 'dark'}` }>
      <h3>Mentoria Hooks</h3>

      <p>Controlando o state individual</p>
      <button onClick={ () => setMode(!mode) }>
        { mode ? 'Agora apague!' : 'Que haja Luix!'}
      </button>

      { mode && <EffectCounter />}
    </div>
  );
}

export default App;
