import React, { Component } from 'react';
import './App.css';

import {Board} from './components/Board.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board player={1}/>
        <Board player={2}/>
      </div>
    );
  }
}

export default App;
