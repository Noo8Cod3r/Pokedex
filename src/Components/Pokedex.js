import React, { Component } from 'react';
import Pokecard from './Pokecard';
import'./Pokedex.css'


export default class Pokedex extends Component {
    static defaultProps = {
        pokemon : [
            { id: 4, name: 'Charmander', type: 'Fire', exp: 62 },
            { id: 7, name: 'Squirtle', type: 'Water', exp: 63 },
            { id: 11, name: 'Metapod', type: 'Bug', exp: 72 },
            { id: 12, name: 'Butterfree', type: 'Flying', exp: 178 },
            { id: 25, name: 'Pikachu', type: 'Electric', exp: 112 },
            { id: 39, name: 'Jigglypuff', type: 'Normal', exp: 95 },
            { id: 94, name: 'Gengar', type: 'Poison', exp: 225 },
            { id: 133, name: 'Eevee', type: 'Normal', exp: 65 }
        ]
    };

    render() {
        return (
          <div className = 'Pokedex'>
            <div className = 'Pokedex-cards'>
            {this.props.pokemon.map((p) => (
              <Pokecard 
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