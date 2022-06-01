import { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState(0);
  const [color, setColor] = useState('black');
  return (
    <div className="App">
      <div className="contenedor">
        <p>Contador:</p>
        <p style={{ color }}> {numero}</p>
        <button
          className="btn decrementar"
          onClick={() => {
            setNumero(numero - 1);
            if (numero <= 0) {
              setColor('red');
            } else if (numero === 1) {
              setColor('black');
            }
          }}
        >
          {' '}
          Disminuir{' '}
        </button>
        <button
          className="btn reset"
          onClick={() => {
            setNumero(numero - numero);
            setColor('black');
          }}
        >
          {' '}
          Reset{' '}
        </button>
        <button
          className="btn aumentar"
          onClick={() => {
            setNumero(numero + 1);
            if (numero >= 0) {
              setColor('green');
            } else if (numero === -1) {
              setColor('black');
            }
          }}
        >
          {' '}
          Aumentar{' '}
        </button>
      </div>
    </div>
  );
}

export default App;
