import React from 'react';
import { Grid } from './Grid.js';

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
const maxNodes = 5;
export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: createGrid(boardHeight, boardWidth),
      nodeCount: 0,
    }
    this.handler = () => {};
    this.clickHandler = this.clickHandler.bind(this);
    this.setHandler = this.setHandler.bind(this);
  }

  placeNodes(y, x) {
    let newMatrix = this.state.matrix;

    if((x > 0 && x < boardWidth-1) && (y > 0 && y < boardHeight-1)){
      // Make sure clicked cell is not at the edge of the grid
      let newCells = [];
      for(let i = 1; i <= 9; i++){
        // Ugly loop because I thought 9 'Object.assign's was uglier
        // loop will target clicked cell and all adjcent cells
        let yCoord = y - i % 3 + 1;
        let xCoord = x  - Math.floor((9-i)/3) + 1;
        if(newMatrix[yCoord][xCoord].empty){
          newCells.push([yCoord, xCoord]);
          console.log('push')
        } else {// if one of the cells to be filled is not empty, do not fill any of these cells
          console.log('too close to another node')
          newCells = [];
          break;
        }
      }
      for (let cell of newCells) {
        Object.assign(newMatrix[cell[0]][cell[1]], {
          node: (cell[0]===y) && (cell[1]===x),// only set the exact cell clicked to be a node, else just fill
          empty: false,
        });
        console.log(`assign to   ${cell[0]},${cell[1]}`)
      }
      let updatedPlayer = this.props.player;
      updatedPlayer.points += newCells.length;// will later be a function to account for adjacent nodes
      this.props.updatePlayer(updatedPlayer);
    } else {
      console.log('Cannot place node at the edge of the grid');
    }

    this.setState({matrix: newMatrix});
  }

  setHandler(action) {
    this.handler = action.bind(this);
  }

  clickHandler(y,x) {
    this.handler(y, x);
  }

  render() {
    const matrix = this.state.matrix;
    const player = this.props.player;

    return(
      <div className='board'>
      <div className='player'>
        <h3 className='player-name'>{player.name}</h3>
        <h3 className='player-points'>{player.points}</h3>
      </div>
        <button onClick={()=>{this.setHandler(this.placeNodes)}}>Place Nodes</button>
        <Grid matrix={matrix} action={this.clickHandler}/>
      </div>
    );
  }
}
