import React from 'react';
import './App.css';
import Pokedex from './Components/Pokedex'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokemon Evolution</h1>
        <h2>Gen 1</h2>
      </header>
      <Pokedex />
    </div>
  );
}

export default App;
