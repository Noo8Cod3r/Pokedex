import React from 'react';
import './App.css';
import Pokecard from '../src/Components/Pokecard'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokedex</h1>
      </header>
      <Pokecard 
        id = {4}
        name = 'Charmander'
        type = 'fire'
        exp = {62}
      />
    </div>
  );
}

export default App;
