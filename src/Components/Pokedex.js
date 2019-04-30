import React, { Component } from 'react';
import Pokecard from './Pokecard';
import'./Pokedex.css'



export default class Pokedex extends Component {
    render() {
      let title;
      if(this.props.isWinner){
        title = <h1 className="Pokegame-winner">Winner</h1>;
      } else {
        title = <h1 className="Pokegame-loser">Loser</h1>
      }
        return (
          <div className = 'Pokedex'>
            <h3>Total Experience: { this.props.exp } </h3>
            { title }
            <div className = 'Pokedex-cards'>
            {this.props.pokemon.map((p) => (
              <Pokecard 
                key={p.id}
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_exp}
              />
            ))}
            </div>
            
          </div>

        )
    }
}