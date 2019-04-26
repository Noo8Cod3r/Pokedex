import React, { Component } from 'react';
import Pokecard from './Pokecard';
import'./Pokedex.css'



export default class Pokedex extends Component {
    static defaultProps = {
        pokemon : [
            { id: 34, name: 'Nidoking', type: 'Poison', exp: 505 },
            { id: 9, name: 'Blastoise', type: 'Water', exp: 530 },
            { id: 6, name: 'Charizard', type: 'Fire', exp: 534 },
            { id: 15, name: 'Beedrill', type: 'Bug', exp: 395 },
            { id: 26, name: 'Raichu', type: 'Electric', exp: 485 },
            { id: 53, name: 'Persian', type: 'Normal', exp: 440 },
            { id: 150, name: 'Mewtwo', type: 'Psychic', exp: 680 },
            { id: 136, name: 'Flareon', type: 'Fire', exp: 525 }
        ]
    };

    render() {
        return (
          <div className = 'Pokedex'>
            <div className = 'Pokedex-cards'>
            {this.props.pokemon.map((p) => (
              <Pokecard 
                key={p.id}
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.exp}
              />
            ))}
            </div>
            
          </div>

        )
    }
}