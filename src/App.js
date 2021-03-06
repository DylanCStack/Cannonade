import React, { Component } from 'react';
import './App.css';

import {Board} from './components/Board.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Player 1',
          points: 0,
        },
        {
          name: 'Player 2',
          points: 0,
        },
      ],
    };
    this.updatePlayer = this.updatePlayer.bind(this);
  }

  updatePlayer(player) {
    let players = this.state.players;
    players[player.id] = player;

    this.setState({players});
  }

  render() {
    const players = this.state.players.map((player, i) => {
       player.id = i;
       return player;
    });

    return (
      <div className="App">
        {
          players.map( player => {
             return <Board player={player} key={player.id} updatePlayer={this.updatePlayer} ></Board>;
          })
        }
      </div>
    );
  }
}

export default App;
