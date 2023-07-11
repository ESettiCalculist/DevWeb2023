import React from 'react';
import CalculadoraMedia from './Components/CalculaNotas';
import Nome from './Components/Nome';

function App() {
  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <h1>Media do Aluno</h1>
      <Nome />
      <CalculadoraMedia />
    </div>
  );
}

export default App;