import React, { Component } from 'react';
import Pokedex from './Pokedex';



export default class Pokegame extends Component {
  static defaultProps = {
    pokemon : [
        { id: 34, name: 'Nidoking', type: 'Poison', base_exp: 505 },
        { id: 9, name: 'Blastoise', type: 'Water', base_exp: 530 },
        { id: 6, name: 'Charizard', type: 'Fire', base_exp: 534 },
        { id: 15, name: 'Beedrill', type: 'Bug', base_exp: 395 },
        { id: 26, name: 'Raichu', type: 'Electric', base_exp: 485 },
        { id: 53, name: 'Persian', type: 'Normal', base_exp: 440 },
        { id: 150, name: 'Mewtwo', type: 'Psychic', base_exp: 680 },
        { id: 136, name: 'Flareon', type: 'Fire', base_exp: 525 }
    ]
};
    render() {
        let player1 = [];
        let player2 = [ ...this.props.pokemon ];
        while(player1.length < player2.length) {
          let randomIdx = Math.floor(Math.random() * player2.length);
          let randomPoke = player2.splice(randomIdx, 1)[0];
          player1.push(randomPoke);
        }
        console.log(player1);
        console.log(player2);

        let exp1 = player1.reduce((exp, pokemon) => exp + pokemon.base_exp, 0);
        let exp2 = player2.reduce((exp, pokemon) => exp + pokemon.base_exp, 0);



        return (
            <div>
              <div>
                <h1>Player 1</h1>
               <Pokedex pokemon = {player1} exp={ exp1 }/>
              </div>
              <div>
                <h1>Player 2</h1>
                <Pokedex pokemon = {player2} exp= { exp2 } /> 
              </div>
                 
            </div>
        )
    }
}
