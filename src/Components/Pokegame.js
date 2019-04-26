import React, { Component } from 'react';
import Pokedex from './Pokedex';



export default class Pokegame extends Component {
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
        let player1 = [];
        let player2 = [ ...this.props.pokemon ];
        while(player1.length < player2.length) {
          let randomIdx = Math.floor(Math.random() * player2.length);
          let randomPoke = player2.splice(randomIdx, 1)[0];
          player1.push(randomPoke);
        }
        console.log(player1);
        console.log(player2);
        return (
            <div>
              <div>
                <p>Player 1</p>
               <Pokedex pokemon = {player1}/>
              </div>
              <div>
                <p>Player 2</p>
                <Pokedex pokemon = {player2}/> 
              </div>
                 
            </div>
        )
    }
}
