import React from 'react';
import {Grid} from './Grid.js';

function createGrid(numRows, numCols) {
  let rows = [];
  for(let y = 0; y < numRows; y++) {
    let cols = [];
    for(let x = 0; x < numCols; x++) {
      cols.push({'x': x, 'y': y});
    }
    rows.push(cols);
  }
  return rows;
}

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: createGrid(20,20)
    }
  }
  render() {
    let matrix = this.state.matrix;
    return(
      <div className='board'>
        <Grid matrix={matrix}/>
      </div>
    );
  }
}
