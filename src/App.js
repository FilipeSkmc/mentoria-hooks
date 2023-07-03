import { useState } from 'react';
import './App.css';
import EffectCounter from './components/EffectCounter';
import EffectSimulator from './components/EffectSimulator';
import FetchRick from './components/FetchRick';
import FormBasic from './components/FormBasic';

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div className={ `App-${mode ? 'light' : 'dark'}` }>
      <h3>Mentoria Hooks</h3>

      <p>Controlando o state individual</p>
      <button onClick={ () => setMode(!mode) }>
        { mode ? 'Agora apague!' : 'Que haja Luix!'}
      </button>
      <FormBasic />
      { mode && <EffectSimulator />}
      { mode && <EffectCounter />}
      <FetchRick />
    </div>
  );
}

export default App;
