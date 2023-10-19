import React, { useState } from 'react';
import logo from './logo.svg';
import Saludo from './components/saludo';
import './App.css';

function App() {
  // Crear el estado "contador" y la función "setContador"
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Sebastian Espitia Sanchez</span>
        

        <Saludo nombre="Sebastian" />

        {/* Mostrar el valor actual del contador */}
        <p>Contador: {contador}</p>

        {/* Botón para incrementar el contador */}
        <button className="contador" onClick={() => setContador(contador + 1)}>
          Incrementar
        </button>

        {/* Botón para decrementar el contador con validación */}
        <button className="contador" onClick={() => {
          if (contador > 0) {
            setContador(contador - 1);
          }
        }}>
          Decrementar
        </button>
      </header>
    </div>
  );
}

export default App;
