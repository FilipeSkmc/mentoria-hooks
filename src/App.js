import { useState } from 'react';
import FormBasic from './components/FormBasic';
import './App.css';
import FetchRick from './components/FetchRick';

function App() {
  /** parte 1 */
  const [mode, setMode] = useState(false);

  return (
    <div className={ `App-${mode ? 'light' : 'dark'}` }>
      <h3>Mentoria Hooks</h3>
      <p>Controlando o state individual</p>
      <button onClick={ () => setMode(!mode) }>
        {mode ? 'Agora apague!' : 'Que haja Luz!'}
      </button>

      { mode ? <FormBasic /> : <FetchRick /> }
    </div>
  );
}

export default App;
