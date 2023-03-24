import { useState } from 'react';
import './App.css';
import FormBasic from './components/FormBasic';
import FetchRick from './components/FetchRick';
import EffectSimulator from './components/EffectSimulator';

function App() {
  /** Extra */
  const [mode, setMode] = useState(false);

  return (
    <div className={ `App-${mode ? 'light' : 'dark'}` }>
      <h3>Mentoria Hooks</h3>
      {/* extra */}
      <p>Controlando o state individual</p>
      <button onClick={ () => setMode(!mode) }>
        {mode ? 'Agora apague!' : 'Que haja Luz!'}
      </button>
      {/* parte 1 */}
      <EffectSimulator />
      {/* parte 2 */}
      <FormBasic />
      {/* parte 3 */}
      <FetchRick />
    </div>
  );
}

export default App;
