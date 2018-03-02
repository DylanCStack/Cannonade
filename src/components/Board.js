import React from 'react';
import {Grid} from './Grid.js';

function createGrid(numRows, numCols) {
  let rows = [];
  for(let y = 0; y < numRows; y++) {
    let cols = [];
    for(let x = 0; x < numCols; x++) {
      cols.push({x, y, maxX: numCols, maxY: numRows, empty: true, node: false, hit: false});
    }
    rows.push(cols);
  }
  return rows;
}

const boardHeight = 20;
const boardWidth = 20;
export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: createGrid(boardHeight, boardWidth),
      action: {},
    }
    this.action = {};
    this.clickHandler = this.clickHandler.bind(this);
    this.setAction = this.setAction.bind(this);
  }

  setAction(action) {
    this.action = action;
    this.state.action = this.action;
  }

  clickHandler(y,x) {
    console.log('click');
    let newMatrix = this.state.matrix;
    if(this.action === 'node'){
      if((x > 0 && x < boardWidth-1) && (y > 0 && y < boardHeight-1)){
        // Make sure clicked cell is not at the edge of the grid
        for(let i = 1; i <= 9; i++){
          // Ugly loop because I thought 9 'Object.assign's was uglier
          // loop will target clicked cell and all adjcent cells
          let yCoord = y - i % 3 + 1;
          let xCoord = x  - Math.floor((9-i)/3) + 1;
          Object.assign(newMatrix[yCoord][xCoord], {
            node: (yCoord===y) && (xCoord===x) ? true : false,
            empty: false,
          });
          console.log(`assign to   ${yCoord},${xCoord}`)
        }
      } else {
        console.log('Cannot place node at the edge of the grid');
      }
    }

    this.setState({matrix: newMatrix});
  }

  render() {
    let matrix = this.state.matrix;
    let action = this.state.action;

    return(
      <div className='board'>
        <button disabled={this.action === 'node'} onClick={()=>{this.setAction('node')}}>Place Nodes</button>
        <Grid matrix={matrix} action={this.clickHandler}/>
      </div>
    );
  }
}
